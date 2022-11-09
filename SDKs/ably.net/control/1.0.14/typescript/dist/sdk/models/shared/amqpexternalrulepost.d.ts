import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AmqpExternalRulePostRequestModeEnum {
    Single = "single"
}
export declare enum AmqpExternalRulePostRuleTypeEnum {
    AmqpExternal = "amqp/external"
}
export declare class AmqpExternalRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AmqpExternalRulePostTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: string;
    headers?: AmqpExternalRulePostTargetHeaders[];
    mandatoryRoute: boolean;
    messageTtl?: number;
    persistentMessages: boolean;
    routingKey: string;
    url: string;
}
export declare class AmqpExternalRulePost extends SpeakeasyBase {
    requestMode: AmqpExternalRulePostRequestModeEnum;
    ruleType: AmqpExternalRulePostRuleTypeEnum;
    source: RuleSource;
    target: AmqpExternalRulePostTarget;
}
