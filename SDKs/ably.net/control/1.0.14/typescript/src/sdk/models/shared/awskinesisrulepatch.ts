import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AwsKinesisRulePatchTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication?: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: AwsKinesisRulePatchTargetFormatEnum;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=streamName" })
  streamName?: string;
}


export class AwsKinesisRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: AwsKinesisRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: AwsKinesisRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsKinesisRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: AwsKinesisRulePatchTarget;
}
