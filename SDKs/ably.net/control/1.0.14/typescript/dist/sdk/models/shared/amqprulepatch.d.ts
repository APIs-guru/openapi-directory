import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpRulePatchRequestModeEnum {
    Single = "single"
}
export declare enum AmqpRulePatchRuleTypeEnum {
    Amqp = "amqp"
}
export declare enum AmqpRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AmqpRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpRulePatchTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpRulePatchTargetHeaders[];
    queueId?: string;
}
export declare class AmqpRulePatch extends SpeakeasyBase {
    requestMode?: AmqpRulePatchRequestModeEnum;
    ruleType?: AmqpRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: AmqpRulePatchStatusEnum;
    target?: AmqpRulePatchTarget;
}
