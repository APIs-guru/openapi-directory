import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AzureFunctionRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum AzureFunctionRulePostRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}
export declare enum AzureFunctionRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AzureFunctionRulePostTargetFormatEnum {
    Json = "json"
}
export declare class AzureFunctionRulePostTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AzureFunctionRulePostTarget extends SpeakeasyBase {
    azureAppId: string;
    azureFunctionName: string;
    enveloped?: boolean;
    format?: AzureFunctionRulePostTargetFormatEnum;
    headers?: AzureFunctionRulePostTargetHeaders[];
    signingKeyId?: string;
}
export declare class AzureFunctionRulePost extends SpeakeasyBase {
    requestMode: AzureFunctionRulePostRequestModeEnum;
    ruleType: AzureFunctionRulePostRuleTypeEnum;
    source: RuleSource;
    status?: AzureFunctionRulePostStatusEnum;
    target: AzureFunctionRulePostTarget;
}
