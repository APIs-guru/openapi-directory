import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsSqsRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication?: any;

  @SpeakeasyMetadata({ data: "json, name=awsAccountId" })
  awsAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=queueName" })
  queueName?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}


export class AwsSqsRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode?: AwsSqsRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType?: AwsSqsRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsSqsRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target?: AwsSqsRulePatchTarget;
}
