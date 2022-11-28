import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AzureFunctionRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum AzureFunctionRulePatchRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}
export declare enum AzureFunctionRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AzureFunctionRulePatchTargetFormatEnum {
    Json = "json"
}
export declare class AzureFunctionRulePatchTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AzureFunctionRulePatchTarget extends SpeakeasyBase {
    azureAppId?: string;
    azureFunctionName?: string;
    enveloped?: boolean;
    format?: AzureFunctionRulePatchTargetFormatEnum;
    headers?: AzureFunctionRulePatchTargetHeaders[];
    signingKeyId?: string;
}
export declare class AzureFunctionRulePatch extends SpeakeasyBase {
    requestMode?: AzureFunctionRulePatchRequestModeEnum;
    ruleType?: AzureFunctionRulePatchRuleTypeEnum;
    source?: RuleSource;
    status?: AzureFunctionRulePatchStatusEnum;
    target?: AzureFunctionRulePatchTarget;
}
