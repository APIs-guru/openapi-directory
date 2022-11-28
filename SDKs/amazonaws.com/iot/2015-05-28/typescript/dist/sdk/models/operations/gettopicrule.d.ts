import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class GetTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetTopicRuleRequest extends SpeakeasyBase {
    pathParams: GetTopicRulePathParams;
    headers: GetTopicRuleHeaders;
}
export declare class GetTopicRuleResponse extends SpeakeasyBase {
    contentType: string;
    getTopicRuleResponse?: shared.GetTopicRuleResponse;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
