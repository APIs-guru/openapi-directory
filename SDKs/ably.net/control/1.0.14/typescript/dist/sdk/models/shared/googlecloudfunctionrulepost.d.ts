import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum GoogleCloudFunctionRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum GoogleCloudFunctionRulePostRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}
export declare enum GoogleCloudFunctionRulePostTargetFormatEnum {
    Json = "json"
}
export declare class GoogleCloudFunctionRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class GoogleCloudFunctionRulePostTarget extends SpeakeasyBase {
    enveloped?: boolean;
    format?: GoogleCloudFunctionRulePostTargetFormatEnum;
    functionName: string;
    headers?: GoogleCloudFunctionRulePostTargetHeaders[];
    projectId: string;
    region: string;
    signingKeyId?: string;
}
export declare class GoogleCloudFunctionRulePost extends SpeakeasyBase {
    requestMode: GoogleCloudFunctionRulePostRequestModeEnum;
    ruleType: GoogleCloudFunctionRulePostRuleTypeEnum;
    source: RuleSource;
    target: GoogleCloudFunctionRulePostTarget;
}
