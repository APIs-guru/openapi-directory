import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsLambdaRulePostTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRulePost extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AwsLambdaRulePostRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRulePostRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsLambdaRulePostStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsLambdaRulePostTarget;
}
