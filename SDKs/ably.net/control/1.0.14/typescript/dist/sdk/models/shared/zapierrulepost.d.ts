import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum ZapierRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum ZapierRulePostRuleTypeEnum {
    HttpZapier = "http/zapier"
}
export declare enum ZapierRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class ZapierRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class ZapierRulePostTarget extends SpeakeasyBase {
    headers?: ZapierRulePostTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class ZapierRulePost extends SpeakeasyBase {
    requestMode: ZapierRulePostRequestModeEnum;
    ruleType: ZapierRulePostRuleTypeEnum;
    source: RuleSource;
    status?: ZapierRulePostStatusEnum;
    target: ZapierRulePostTarget;
}
