import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum GoogleCloudFunctionRulePatchRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum GoogleCloudFunctionRulePatchRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum GoogleCloudFunctionRulePatchTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRulePatchTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRulePatchTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName?: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: GoogleCloudFunctionRulePatchTargetHeaders })
  headers?: GoogleCloudFunctionRulePatchTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: GoogleCloudFunctionRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: GoogleCloudFunctionRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudFunctionRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: GoogleCloudFunctionRulePatchTarget;
}
