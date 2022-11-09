import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AzureFunctionRulePostRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum AzureFunctionRulePostRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AzureFunctionRulePostTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=azureAppId" })
  azureAppId: string;

  @Metadata({ data: "json, name=azureFunctionName" })
  azureFunctionName: string;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: AzureFunctionRulePostTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.AzureFunctionRulePostTargetHeaders })
  headers?: AzureFunctionRulePostTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AzureFunctionRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AzureFunctionRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AzureFunctionRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AzureFunctionRulePostTarget;
}
