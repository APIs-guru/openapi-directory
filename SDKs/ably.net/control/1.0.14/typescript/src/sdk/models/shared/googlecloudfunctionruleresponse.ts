import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";


export enum GoogleCloudFunctionRuleResponseRequestModeEnum {
    Single = "single",
    Batch = "batch"
}

export enum GoogleCloudFunctionRuleResponseRuleTypeEnum {
    HttpGoogleCloudFunction = "http/google-cloud-function"
}

export enum GoogleCloudFunctionRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum GoogleCloudFunctionRuleResponseTargetFormatEnum {
    Json = "json"
}


export class GoogleCloudFunctionRuleResponseTargetHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class GoogleCloudFunctionRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: GoogleCloudFunctionRuleResponseTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: GoogleCloudFunctionRuleResponseTargetHeaders })
  headers?: GoogleCloudFunctionRuleResponseTargetHeaders[];

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=signingKeyId" })
  signingKeyId?: string;
}


export class GoogleCloudFunctionRuleResponse extends SpeakeasyBase {
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
  requestMode: GoogleCloudFunctionRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: GoogleCloudFunctionRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GoogleCloudFunctionRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: GoogleCloudFunctionRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
