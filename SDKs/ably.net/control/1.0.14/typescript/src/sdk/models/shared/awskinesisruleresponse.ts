import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeysResponse } from "./awsaccesskeysresponse";
import { AwsAssumeRole } from "./awsassumerole";


export enum AwsKinesisRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AwsKinesisRuleResponseRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}

export enum AwsKinesisRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AwsKinesisRuleResponseTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AwsKinesisRuleResponseTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName: string;
}


export class AwsKinesisRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsKinesisRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsKinesisRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsKinesisRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsKinesisRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
