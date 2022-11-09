import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";

export enum AwsSqsRulePostRequestModeEnum {
    Single = "single"
}

export enum AwsSqsRulePostRuleTypeEnum {
    AwsSqs = "aws/sqs"
}

export enum AwsSqsRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsSqsRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=awsAccountId" })
  awsAccountId: string;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=queueName" })
  queueName: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class AwsSqsRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AwsSqsRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsSqsRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsSqsRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsSqsRulePostTarget;
}
