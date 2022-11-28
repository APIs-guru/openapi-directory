import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum ZapierRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum ZapierRulePatchRuleTypeEnum {
    HttpZapier = "http/zapier"
}
export declare enum ZapierRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class ZapierRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class ZapierRulePatchTarget extends SpeakeasyBase {
    headers?: ZapierRulePatchTargetHeaders[];
    signingKeyId?: string;
    url?: string;
}
export declare class ZapierRulePatch extends SpeakeasyBase {
    requestMode?: ZapierRulePatchRequestModeEnum;
    ruleType?: ZapierRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: ZapierRulePatchStatusEnum;
    target?: ZapierRulePatchTarget;
}
