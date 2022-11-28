import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";


export enum AwsKinesisRulePostRequestModeEnum {
    Single = "single"
}

export enum AwsKinesisRulePostRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}

export enum AwsKinesisRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AwsKinesisRulePostTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format: AwsKinesisRulePostTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName: string;
}


export class AwsKinesisRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AwsKinesisRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsKinesisRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsKinesisRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsKinesisRulePostTarget;
}
