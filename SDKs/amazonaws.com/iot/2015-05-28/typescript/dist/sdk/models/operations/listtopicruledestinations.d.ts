import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTopicRuleDestinationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListTopicRuleDestinationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTopicRuleDestinationsRequest extends SpeakeasyBase {
    queryParams: ListTopicRuleDestinationsQueryParams;
    headers: ListTopicRuleDestinationsHeaders;
}
export declare class ListTopicRuleDestinationsResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listTopicRuleDestinationsResponse?: shared.ListTopicRuleDestinationsResponse;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
