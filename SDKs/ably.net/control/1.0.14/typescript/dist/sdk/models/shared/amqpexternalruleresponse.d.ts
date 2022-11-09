import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpExternalRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum AmqpExternalRuleResponseRuleTypeEnum {
    AmqpExternal = "amqp/external"
}
export declare enum AmqpExternalRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AmqpExternalRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpExternalRuleResponseTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpExternalRuleResponseTargetHeaders[];
    mandatoryRoute: boolean;
    messageTtl?: number;
    persistentMessages: boolean;
    routingKey: string;
    url: string;
}
export declare class AmqpExternalRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AmqpExternalRuleResponseRequestModeEnum;
    ruleType: AmqpExternalRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AmqpExternalRuleResponseStatusEnum;
    target: AmqpExternalRuleResponseTarget;
    version?: string;
}
