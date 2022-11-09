import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpExternalRulePatchRequestModeEnum {
    Single = "single"
}
export declare enum AmqpExternalRulePatchRuleTypeEnum {
    AmqpExternal = "amqp/external"
}
export declare enum AmqpExternalRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AmqpExternalRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpExternalRulePatchTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpExternalRulePatchTargetHeaders[];
    mandatoryRoute?: boolean;
    messageTtl?: number;
    persistentMessages?: boolean;
    routingKey?: string;
    url?: string;
}
export declare class AmqpExternalRulePatch extends SpeakeasyBase {
    requestMode?: AmqpExternalRulePatchRequestModeEnum;
    ruleType?: AmqpExternalRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: AmqpExternalRulePatchStatusEnum;
    target?: AmqpExternalRulePatchTarget;
}
