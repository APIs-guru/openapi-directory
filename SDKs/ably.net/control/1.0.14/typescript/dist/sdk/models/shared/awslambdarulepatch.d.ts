import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsLambdaRulePatchRequestModeEnum {
    Single = "single"
}
export declare enum AwsLambdaRulePatchRuleTypeEnum {
    AwsLambda = "aws/lambda"
}
export declare enum AwsLambdaRulePatchStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsLambdaRulePatchTarget extends SpeakeasyBase {
    authentication: any;
    enveloped?: boolean;
    functionName: string;
    region: string;
}
export declare class AwsLambdaRulePatch extends SpeakeasyBase {
    requestMode: AwsLambdaRulePatchRequestModeEnum;
    ruleType: AwsLambdaRulePatchRuleTypeEnum;
    source: RuleSource;
    status?: AwsLambdaRulePatchStatusEnum;
    target: AwsLambdaRulePatchTarget;
}
