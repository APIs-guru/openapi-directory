import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AzureFunctionRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum AzureFunctionRulePatchRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AzureFunctionRulePatchTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=azureAppId" })
  azureAppId?: string;

  @SpeakeasyMetadata({ data: "json, name=azureFunctionName" })
  azureFunctionName?: string;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: AzureFunctionRulePatchTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AzureFunctionRulePatchTargetHeaders })
  headers?: AzureFunctionRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: AzureFunctionRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: AzureFunctionRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AzureFunctionRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AzureFunctionRulePatchTarget;
}
