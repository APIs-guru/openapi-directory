import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum AzureFunctionRulePatchRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum AzureFunctionRulePatchRuleTypeEnum {
    HttpAzureFunction = "http/azure-function"
}

export enum AzureFunctionRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AzureFunctionRulePatchTargetFormatEnum {
    Json = "json"
}


export class AzureFunctionRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class AzureFunctionRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=azureAppId" })
  azureAppId?: string;

  @Metadata({ data: "json, name=azureFunctionName" })
  azureFunctionName?: string;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: AzureFunctionRulePatchTargetFormatEnum;

  @Metadata({ data: "json, name=headers", elemType: shared.AzureFunctionRulePatchTargetHeaders })
  headers?: AzureFunctionRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class AzureFunctionRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: AzureFunctionRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: AzureFunctionRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AzureFunctionRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: AzureFunctionRulePatchTarget;
}
