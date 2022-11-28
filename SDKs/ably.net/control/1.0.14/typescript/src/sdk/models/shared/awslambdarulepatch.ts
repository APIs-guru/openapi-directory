import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsLambdaRulePatchTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRulePatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMode" })
  requestMode: AwsLambdaRulePatchRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRulePatchRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsLambdaRulePatchStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsLambdaRulePatchTarget;
}
