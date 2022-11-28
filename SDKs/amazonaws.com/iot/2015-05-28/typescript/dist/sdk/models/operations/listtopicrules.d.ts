import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTopicRulesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
    ruleDisabled?: boolean;
    topic?: string;
}
export declare class ListTopicRulesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListTopicRulesRequest extends SpeakeasyBase {
    queryParams: ListTopicRulesQueryParams;
    headers: ListTopicRulesHeaders;
}
export declare class ListTopicRulesResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    listTopicRulesResponse?: shared.ListTopicRulesResponse;
    serviceUnavailableException?: any;
    statusCode: number;
}
