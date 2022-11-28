import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum GoogleCloudFunctionRulePostRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum GoogleCloudFunctionRulePostRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRulePostTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRulePostTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRulePostTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: GoogleCloudFunctionRulePostTargetHeaders })
  headers?: GoogleCloudFunctionRulePostTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: GoogleCloudFunctionRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: GoogleCloudFunctionRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: GoogleCloudFunctionRulePostTarget;
}
