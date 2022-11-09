import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsSqsRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum AwsSqsRuleResponseRuleTypeEnum {
    AwsSqs = "aws/sqs"
}
export declare enum AwsSqsRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsSqsRuleResponseTarget extends SpeakeasyBase {
    authentication: any;
    awsAccountId: string;
    enveloped?: boolean;
    format?: string;
    queueName: string;
    region: string;
}
export declare class AwsSqsRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AwsSqsRuleResponseRequestModeEnum;
    ruleType: AwsSqsRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AwsSqsRuleResponseStatusEnum;
    target: AwsSqsRuleResponseTarget;
    version?: string;
}
