import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";

export enum AwsSqsRulePatchRequestModeEnum {
    Single = "single"
}

export enum AwsSqsRulePatchRuleTypeEnum {
    AwsSqs = "aws/sqs"
}

export enum AwsSqsRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsSqsRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication?: any;

  @Metadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=queueName" })
  queueName?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;
}


export class AwsSqsRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode?: AwsSqsRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType?: AwsSqsRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source?: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsSqsRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target?: AwsSqsRulePatchTarget;
}
