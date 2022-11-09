import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsSqsRulePostRequestModeEnum {
    Single = "single"
}
export declare enum AwsSqsRulePostRuleTypeEnum {
    AwsSqs = "aws/sqs"
}
export declare enum AwsSqsRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsSqsRulePostTarget extends SpeakeasyBase {
    authentication: any;
    awsAccountId: string;
    enveloped?: boolean;
    format?: string;
    queueName: string;
    region: string;
}
export declare class AwsSqsRulePost extends SpeakeasyBase {
    requestMode: AwsSqsRulePostRequestModeEnum;
    ruleType: AwsSqsRulePostRuleTypeEnum;
    source: RuleSource;
    status?: AwsSqsRulePostStatusEnum;
    target: AwsSqsRulePostTarget;
}
