import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AzureFunctionRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum AzureFunctionRulePostRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AzureFunctionRulePostTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=azureAppId" })
  azureAppId: string;

  @SpeakeasyMetadata({ data: "json, name=azureFunctionName" })
  azureFunctionName: string;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: AzureFunctionRulePostTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AzureFunctionRulePostTargetHeaders })
  headers?: AzureFunctionRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AzureFunctionRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AzureFunctionRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AzureFunctionRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AzureFunctionRulePostTarget;
}
