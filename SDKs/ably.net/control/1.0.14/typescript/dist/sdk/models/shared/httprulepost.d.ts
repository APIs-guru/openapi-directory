import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum HttpRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum HttpRulePostRuleTypeEnum {
    Http = "http"
}
export declare enum HttpRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum HttpRulePostTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}
export declare class HttpRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class HttpRulePostTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format: HttpRulePostTargetFormatEnum;
    headers?: HttpRulePostTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class HttpRulePost extends SpeakeasyBase {
    requestMode: HttpRulePostRequestModeEnum;
    ruleType: HttpRulePostRuleTypeEnum;
    source: RuleSource;
    status?: HttpRulePostStatusEnum;
    target: HttpRulePostTarget;
}
