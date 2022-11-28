import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum ZapierRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum ZapierRuleResponseRuleTypeEnum {
    HttpZapier = "http/zapier"
}
export declare enum ZapierRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class ZapierRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class ZapierRuleResponseTarget extends SpeakeasyBase {
    headers?: ZapierRuleResponseTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class ZapierRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: ZapierRuleResponseRequestModeEnum;
    ruleType: ZapierRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: ZapierRuleResponseStatusEnum;
    target: ZapierRuleResponseTarget;
    version?: string;
}
