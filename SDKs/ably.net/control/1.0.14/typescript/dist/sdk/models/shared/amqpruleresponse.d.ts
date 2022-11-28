import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum AmqpRuleResponseRuleTypeEnum {
    Amqp = "amqp"
}
export declare enum AmqpRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AmqpRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpRuleResponseTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpRuleResponseTargetHeaders[];
    queueId: string;
}
export declare class AmqpRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AmqpRuleResponseRequestModeEnum;
    ruleType: AmqpRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AmqpRuleResponseStatusEnum;
    target: AmqpRuleResponseTarget;
    version?: string;
}
