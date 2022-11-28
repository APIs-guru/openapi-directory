import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum AzureFunctionRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum AzureFunctionRuleResponseRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AzureFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=azureAppId" })
  azureAppId: string;

  @SpeakeasyMetadata({ data: "json, name=azureFunctionName" })
  azureFunctionName: string;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: AzureFunctionRuleResponseTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: AzureFunctionRuleResponseTargetHeaders })
  headers?: AzureFunctionRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modified" })
  modified?: number;

  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AzureFunctionRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AzureFunctionRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AzureFunctionRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AzureFunctionRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
