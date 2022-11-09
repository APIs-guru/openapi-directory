import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum GoogleCloudFunctionRulePatchRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum GoogleCloudFunctionRulePatchRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum GoogleCloudFunctionRulePatchTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRulePatchTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRulePatchTargetFormatEnum;

  @Metadata({ data: "json, name=functionName" })
  functionName?: string;

  @Metadata({ data: "json, name=headers", elemType: shared.GoogleCloudFunctionRulePatchTargetHeaders })
  headers?: GoogleCloudFunctionRulePatchTargetHeaders[];

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: GoogleCloudFunctionRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: GoogleCloudFunctionRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudFunctionRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: GoogleCloudFunctionRulePatchTarget;
}
