import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteSubscriptionDefinitionPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
}
export declare class DeleteSubscriptionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteSubscriptionDefinitionRequest extends SpeakeasyBase {
    pathParams: DeleteSubscriptionDefinitionPathParams;
    headers: DeleteSubscriptionDefinitionHeaders;
}
export declare class DeleteSubscriptionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    deleteSubscriptionDefinitionResponse?: Map<string, any>;
    statusCode: number;
}
