import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";


export enum AwsKinesisRulePatchRequestModeEnum {
    Single = "single"
}

export enum AwsKinesisRulePatchRuleTypeEnum {
    AwsKinesis = "aws/kinesis"
}

export enum AwsKinesisRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}

export enum AwsKinesisRulePatchTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: AwsKinesisRulePatchTargetFormatEnum;

  @SpeakeasyMetadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=streamName" })
  streamName?: string;
}


export class AwsKinesisRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: AwsKinesisRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: AwsKinesisRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsKinesisRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AwsKinesisRulePatchTarget;
}
