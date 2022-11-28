import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AzureFunctionRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}
export declare enum AzureFunctionRuleResponseRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}
export declare enum AzureFunctionRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare enum AzureFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}
export declare class AzureFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
    name?: string;
    value?: string;
}
export declare class AzureFunctionRuleResponseTarget extends SpeakeasyBase {
    azureAppId: string;
    azureFunctionName: string;
    enveloped?: boolean;
    format?: AzureFunctionRuleResponseTargetFormatEnum;
    headers?: AzureFunctionRuleResponseTargetHeaders[];
    signingKeyId?: string;
}
export declare class AzureFunctionRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AzureFunctionRuleResponseRequestModeEnum;
    ruleType: AzureFunctionRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AzureFunctionRuleResponseStatusEnum;
    target: AzureFunctionRuleResponseTarget;
    version?: string;
}
