import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsLambdaRulePostRequestModeEnum {
    Single = "single"
}
export declare enum AwsLambdaRulePostRuleTypeEnum {
    AwsLambda = "aws/lambda"
}
export declare enum AwsLambdaRulePostStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsLambdaRulePostTarget extends SpeakeasyBase {
    authentication: any;
    enveloped?: boolean;
    functionName: string;
    region: string;
}
export declare class AwsLambdaRulePost extends SpeakeasyBase {
    requestMode: AwsLambdaRulePostRequestModeEnum;
    ruleType: AwsLambdaRulePostRuleTypeEnum;
    source: RuleSource;
    status?: AwsLambdaRulePostStatusEnum;
    target: AwsLambdaRulePostTarget;
}
