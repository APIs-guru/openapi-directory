import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsSqsRuleResponseTarget extends SpeakeasyBase {
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


export class AwsSqsRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsSqsRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsSqsRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsSqsRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsSqsRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
