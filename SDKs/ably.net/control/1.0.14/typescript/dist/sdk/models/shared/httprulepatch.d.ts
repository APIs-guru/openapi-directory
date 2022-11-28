import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum HttpRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum HttpRulePatchRuleTypeEnum {
    Http = "http"
}
export declare enum HttpRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum HttpRulePatchTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}
export declare class HttpRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class HttpRulePatchTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: HttpRulePatchTargetFormatEnum;
    headers?: HttpRulePatchTargetHeaders[];
    signingKeyId?: string;
    url?: string;
}
export declare class HttpRulePatch extends SpeakeasyBase {
    requestMode?: HttpRulePatchRequestModeEnum;
    ruleType?: HttpRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: HttpRulePatchStatusEnum;
    target?: HttpRulePatchTarget;
}
