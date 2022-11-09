import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";

export enum AwsLambdaRulePostRequestModeEnum {
    Single = "single"
}

export enum AwsLambdaRulePostRuleTypeEnum {
    AwsLambda = "aws/lambda"
}

export enum AwsLambdaRulePostStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsLambdaRulePostTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=functionName" })
  functionName: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRulePost extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AwsLambdaRulePostRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRulePostRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsLambdaRulePostStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsLambdaRulePostTarget;
}
