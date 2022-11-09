import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpRulePostRequestModeEnum {
    Single = "single"
}
export declare enum AmqpRulePostRuleTypeEnum {
    Amqp = "amqp"
}
export declare enum AmqpRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AmqpRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpRulePostTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpRulePostTargetHeaders[];
    queueId: string;
}
export declare class AmqpRulePost extends SpeakeasyBase {
    requestMode: AmqpRulePostRequestModeEnum;
    ruleType: AmqpRulePostRuleTypeEnum;
    source: RuleSource;
    status?: AmqpRulePostStatusEnum;
    target: AmqpRulePostTarget;
}
