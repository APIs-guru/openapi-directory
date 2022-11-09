import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
import { AwsAccessKeys } from "./awsaccesskeys";
import { AwsAssumeRole } from "./awsassumerole";

export enum AwsLambdaRulePatchRequestModeEnum {
    Single = "single"
}

export enum AwsLambdaRulePatchRuleTypeEnum {
    AwsLambda = "aws/lambda"
}

export enum AwsLambdaRulePatchStatusEnum {
    Enabled = "enabled"
,    Disabled = "disabled"
}


export class AwsLambdaRulePatchTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=authentication" })
  authentication: any;

  @Metadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @Metadata({ data: "json, name=functionName" })
  functionName: string;

  @Metadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRulePatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestMode" })
  requestMode: AwsLambdaRulePatchRequestModeEnum;

  @Metadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRulePatchRuleTypeEnum;

  @Metadata({ data: "json, name=source" })
  source: RuleSource;

  @Metadata({ data: "json, name=status" })
  status?: AwsLambdaRulePatchStatusEnum;

  @Metadata({ data: "json, name=target" })
  target: AwsLambdaRulePatchTarget;
}
