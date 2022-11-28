import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum GoogleCloudFunctionRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum GoogleCloudFunctionRulePatchRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}
export declare enum GoogleCloudFunctionRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum GoogleCloudFunctionRulePatchTargetFormatEnum {
    Json = "json"
}
export declare class GoogleCloudFunctionRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class GoogleCloudFunctionRulePatchTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: GoogleCloudFunctionRulePatchTargetFormatEnum;
    functionName?: string;
    headers?: GoogleCloudFunctionRulePatchTargetHeaders[];
    projectId?: string;
    region?: string;
    signingKeyId?: string;
}
export declare class GoogleCloudFunctionRulePatch extends SpeakeasyBase {
    requestMode?: GoogleCloudFunctionRulePatchRequestModeEnum;
    ruleType?: GoogleCloudFunctionRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: GoogleCloudFunctionRulePatchStatusEnum;
    target?: GoogleCloudFunctionRulePatchTarget;
}
