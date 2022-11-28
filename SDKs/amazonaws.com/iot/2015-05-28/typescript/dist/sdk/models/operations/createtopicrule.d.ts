import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTopicRulePathParams extends SpeakeasyBase {
    ruleName: string;
}
export declare class CreateTopicRuleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTagging?: string;
}
/**
 * Describes a rule.
**/
export declare class CreateTopicRuleRequestBodyTopicRulePayload extends SpeakeasyBase {
    actions?: shared.Action[];
    awsIotSqlVersion?: string;
    description?: string;
    errorAction?: shared.Action;
    ruleDisabled?: boolean;
    sql?: string;
}
export declare class CreateTopicRuleRequestBody extends SpeakeasyBase {
    topicRulePayload: CreateTopicRuleRequestBodyTopicRulePayload;
}
export declare class CreateTopicRuleRequest extends SpeakeasyBase {
    pathParams: CreateTopicRulePathParams;
    headers: CreateTopicRuleHeaders;
    request: CreateTopicRuleRequestBody;
}
export declare class CreateTopicRuleResponse extends SpeakeasyBase {
    conflictingResourceUpdateException?: any;
    contentType: string;
    internalException?: any;
    invalidRequestException?: any;
    resourceAlreadyExistsException?: any;
    serviceUnavailableException?: any;
    sqlParseException?: any;
    statusCode: number;
}
