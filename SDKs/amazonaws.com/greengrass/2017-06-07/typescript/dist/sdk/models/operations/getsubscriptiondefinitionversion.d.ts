import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSubscriptionDefinitionVersionPathParams extends SpeakeasyBase {
    subscriptionDefinitionId: string;
    subscriptionDefinitionVersionId: string;
}
export declare class GetSubscriptionDefinitionVersionQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetSubscriptionDefinitionVersionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetSubscriptionDefinitionVersionRequest extends SpeakeasyBase {
    pathParams: GetSubscriptionDefinitionVersionPathParams;
    queryParams: GetSubscriptionDefinitionVersionQueryParams;
    headers: GetSubscriptionDefinitionVersionHeaders;
}
export declare class GetSubscriptionDefinitionVersionResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getSubscriptionDefinitionVersionResponse?: shared.GetSubscriptionDefinitionVersionResponse;
    statusCode: number;
}
