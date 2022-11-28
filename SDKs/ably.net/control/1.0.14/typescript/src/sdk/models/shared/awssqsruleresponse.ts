import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeysResponse } from "./awsaccesskeysresponse";
import { AwsAssumeRole } from "./awsassumerole";


export enum AwsSqsRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AwsSqsRuleResponseRuleTypeEnum {
    AwsSqs = "aws/sqs"
}

export enum AwsSqsRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsSqsRuleResponseTarget extends SpeakeasyBase {
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


export class AwsSqsRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsSqsRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsSqsRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsSqsRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsSqsRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
