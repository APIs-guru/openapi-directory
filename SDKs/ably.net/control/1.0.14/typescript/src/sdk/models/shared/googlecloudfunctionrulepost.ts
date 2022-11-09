import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RuleSource } from "./rulesource";

export enum GoogleCloudFunctionRulePostRequestModeEnum {
    Single = "single"
,    Batch = "batch"
}

export enum GoogleCloudFunctionRulePostRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRulePostTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRulePostTargetHeaders extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRulePostTargetFormatEnum;

  @Metadata({ data: "json, name=functionName" })
  functionName: string;

  @Metadata({ data: "json, name=headers", elemType: shared.GoogleCloudFunctionRulePostTargetHeaders })
  headers?: GoogleCloudFunctionRulePostTargetHeaders[];

  @Metadata({ data: "json, name=projectId" })
  projectId: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: GoogleCloudFunctionRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: GoogleCloudFunctionRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=target" })
  target: GoogleCloudFunctionRulePostTarget;
}
