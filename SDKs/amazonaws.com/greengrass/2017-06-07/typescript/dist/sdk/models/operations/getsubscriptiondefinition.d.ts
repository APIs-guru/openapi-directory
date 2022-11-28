import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionDefinitionPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
}
export declare class GetSubscriptionDefinitionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSubscriptionDefinitionRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionDefinitionPathParams;
    headers: GetSubscriptionDefinitionHeaders;
}
export declare class GetSubscriptionDefinitionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSubscriptionDefinitionResponse?: shared.GetSubscriptionDefinitionResponse;
    statusCode: number;
}
