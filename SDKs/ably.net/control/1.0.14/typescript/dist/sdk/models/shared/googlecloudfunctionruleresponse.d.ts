import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum GoogleCloudFunctionRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum GoogleCloudFunctionRuleResponseRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}
export declare enum GoogleCloudFunctionRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum GoogleCloudFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}
export declare class GoogleCloudFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class GoogleCloudFunctionRuleResponseTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: GoogleCloudFunctionRuleResponseTargetFormatEnum;
    functionName: string;
    headers?: GoogleCloudFunctionRuleResponseTargetHeaders[];
    projectId: string;
    region: string;
    signingKeyId?: string;
}
export declare class GoogleCloudFunctionRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: GoogleCloudFunctionRuleResponseRequestModeEnum;
    ruleType: GoogleCloudFunctionRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: GoogleCloudFunctionRuleResponseStatusEnum;
    target: GoogleCloudFunctionRuleResponseTarget;
    version?: string;
}
