import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum IftttRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum IftttRuleResponseRuleTypeEnum {
    HttpIfttt = "http/ifttt"
}
export declare enum IftttRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class IftttRuleResponseTarget extends SpeakeasyBase {
    eventName: string;
    webhookKey: string;
}
export declare class IftttRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: IftttRuleResponseRequestModeEnum;
    ruleType: IftttRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: IftttRuleResponseStatusEnum;
    target: IftttRuleResponseTarget;
    version?: string;
}
