import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsSqsRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=awsAccountId" })
  awsAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=queueName" })
  queueName: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class AwsSqsRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AwsSqsRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsSqsRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsSqsRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsSqsRulePostTarget;
}
