import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AwsKinesisRulePostTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format: AwsKinesisRulePostTargetFormatEnum;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=streamName" })
  streamName: string;
}


export class AwsKinesisRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AwsKinesisRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsKinesisRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsKinesisRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsKinesisRulePostTarget;
}
