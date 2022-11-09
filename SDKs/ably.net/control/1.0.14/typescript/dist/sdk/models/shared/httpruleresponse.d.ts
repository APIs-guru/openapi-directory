import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum HttpRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum HttpRuleResponseRuleTypeEnum {
    Http = "http"
}
export declare enum HttpRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum HttpRuleResponseTargetFormatEnum {
    Json = "json",
    Msgpack = "msgpack"
}
export declare class HttpRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class HttpRuleResponseTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format: HttpRuleResponseTargetFormatEnum;
    headers?: HttpRuleResponseTargetHeaders[];
    signingKeyId?: string;
    url: string;
}
export declare class HttpRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: HttpRuleResponseRequestModeEnum;
    ruleType: HttpRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: HttpRuleResponseStatusEnum;
    target: HttpRuleResponseTarget;
    version?: string;
}
