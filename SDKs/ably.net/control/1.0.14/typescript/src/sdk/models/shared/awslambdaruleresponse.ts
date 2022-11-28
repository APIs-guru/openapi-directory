import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
    Enabled = "enabled",
    Disabled = "disabled"
}


export class AwsLambdaRuleResponseTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authentication" })
  authentication: any;

  @SpeakeasyMetadata({ data: "json, name=enveloped" })
  enveloped?: boolean;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=functionName" })
  functionName: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;
}


export class AwsLambdaRuleResponse extends SpeakeasyBase {
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
  requestMode: AwsLambdaRuleResponseRequestModeEnum;

  @SpeakeasyMetadata({ data: "json, name=ruleType" })
  ruleType: AwsLambdaRuleResponseRuleTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: RuleSource;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: AwsLambdaRuleResponseStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=target" })
  target: AwsLambdaRuleResponseTarget;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
