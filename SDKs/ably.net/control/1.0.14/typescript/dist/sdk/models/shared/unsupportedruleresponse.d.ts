import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum UnsupportedRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum UnsupportedRuleResponseRuleTypeEnum {
    Unsupported = "unsupported"
}
export declare enum UnsupportedRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class UnsupportedRuleResponseTarget extends SpeakeasyBase {
    url: string;
}
export declare class UnsupportedRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: UnsupportedRuleResponseRequestModeEnum;
    ruleType: UnsupportedRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: UnsupportedRuleResponseStatusEnum;
    target: UnsupportedRuleResponseTarget;
    version?: string;
}
