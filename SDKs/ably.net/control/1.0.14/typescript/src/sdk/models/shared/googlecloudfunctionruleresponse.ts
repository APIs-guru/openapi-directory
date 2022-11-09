import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum GoogleCloudFunctionRuleResponseRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum GoogleCloudFunctionRuleResponseRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum GoogleCloudFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRuleResponseTargetFormatEnum;

  @Metadata({ data: "json, name=functionName" })
  functionName: string;

  @Metadata({ data: "json, name=headers", elemType: shared.GoogleCloudFunctionRuleResponseTargetHeaders })
  headers?: GoogleCloudFunctionRuleResponseTargetHeaders[];

  @Metadata({ data: "json, name=projectId" })
  projectId: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRuleResponse extends SpeakeasyBase {
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
  requestMode: GoogleCloudFunctionRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: GoogleCloudFunctionRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: GoogleCloudFunctionRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: GoogleCloudFunctionRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
