import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateSubscriptionDefinitionPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
}
export declare class UpdateSubscriptionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateSubscriptionDefinitionRequestBody extends SpeakeasyBase {
    name?: string;
}
export declare class UpdateSubscriptionDefinitionRequest extends SpeakeasyBase {
    pathParams: UpdateSubscriptionDefinitionPathParams;
    headers: UpdateSubscriptionDefinitionHeaders;
    request: UpdateSubscriptionDefinitionRequestBody;
}
export declare class UpdateSubscriptionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    statusCode: number;
    updateSubscriptionDefinitionResponse?: Map<string, any>;
}
