import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeysResponse } from "./awsaccesskeysresponse";
import { AwsAssumeRole } from "./awsassumerole";

export enum AwsLambdaRuleResponseRequestModeEnum {
    Single = "single"
}

export enum AwsLambdaRuleResponseRuleTypeEnum {
    AwsLambda = "aws/lambda"
}

export enum AwsLambdaRuleResponseStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsLambdaRuleResponseTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=functionName" })
  functionName: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsLambdaRuleResponseRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRuleResponseRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsLambdaRuleResponseStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsLambdaRuleResponseTarget;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
