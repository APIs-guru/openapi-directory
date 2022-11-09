import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsSqsRulePatchRequestModeEnum {
    Single = "single"
}
export declare enum AwsSqsRulePatchRuleTypeEnum {
    AwsSqs = "aws/sqs"
}
export declare enum AwsSqsRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsSqsRulePatchTarget extends SpeakeasyBase {
    authentication?: any;
    awsAccountId?: string;
    enveloped?: boolean;
    format?: string;
    queueName?: string;
    region?: string;
}
export declare class AwsSqsRulePatch extends SpeakeasyBase {
    requestMode?: AwsSqsRulePatchRequestModeEnum;
    ruleType?: AwsSqsRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: AwsSqsRulePatchStatusEnum;
    target?: AwsSqsRulePatchTarget;
}
