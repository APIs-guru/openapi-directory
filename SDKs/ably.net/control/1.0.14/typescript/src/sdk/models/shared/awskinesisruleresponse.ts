import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
    Enabled = "enabled"
,    Disabled = "disabled"
}

export enum AwsKinesisRuleResponseTargetFormatEnum {
    Json = "json"
}


export class AwsKinesisRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format: AwsKinesisRuleResponseTargetFormatEnum;

  @Metadata({ data: "json, name=partitionKey" })
  partitionKey: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=streamName" })
  streamName: string;
}


export class AwsKinesisRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsKinesisRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsKinesisRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsKinesisRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsKinesisRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
