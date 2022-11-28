import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReplaceTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class ReplaceTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * Describes a rule.
**/
export declare class ReplaceTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
    actions?: shared.Action[];
    awsIotSqlVersion?: string;
    description?: string;
    errorAction?: shared.Action;
    ruleDisabled?: boolean;
    sql?: string;
}
export declare class ReplaceTopicRuleRequestBody extends SpeakeasyBase {
    topicRulePayload: ReplaceTopicRuleRequestBodyTopicRulePayload;
}
export declare class ReplaceTopicRuleRequest extends SpeakeasyBase {
    pathParams: ReplaceTopicRulePathParams;
    headers: ReplaceTopicRuleHeaders;
    request: ReplaceTopicRuleRequestBody;
}
export declare class ReplaceTopicRuleResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    serviceUnavailableException?: any;
    sqlParseException?: any;
    statusCode: number;
    unauthorizedException?: any;
}
