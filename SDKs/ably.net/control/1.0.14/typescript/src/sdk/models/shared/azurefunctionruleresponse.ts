import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AzureFunctionRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum AzureFunctionRuleResponseRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AzureFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=azureAppId" })
  azureAppId: string;

  @Metadata({ data: "json, name=azureFunctionName" })
  azureFunctionName: string;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: AzureFunctionRuleResponseTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.AzureFunctionRuleResponseTargetHeaders })
  headers?: AzureFunctionRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=created" })
  created?: number;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=modified" })
  modified?: number;

  @Metadata({ data: "json, name=requestMode" })
  requestMode: AzureFunctionRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AzureFunctionRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AzureFunctionRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AzureFunctionRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
