import { SpeakeasyBase } from "../../../internal/utils";
import { RuleSource } from "./rulesource";
export declare enum AwsLambdaRuleResponseRequestModeEnum {
    Single = "single"
}
export declare enum AwsLambdaRuleResponseRuleTypeEnum {
    AwsLambda = "aws/lambda"
}
export declare enum AwsLambdaRuleResponseStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class AwsLambdaRuleResponseTarget extends SpeakeasyBase {
    authentication: any;
    enveloped?: boolean;
    format?: string;
    functionName: string;
    region: string;
}
export declare class AwsLambdaRuleResponse extends SpeakeasyBase {
    links?: Map<string, any>;
    appId?: string;
    created?: number;
    id?: string;
    modified?: number;
    requestMode: AwsLambdaRuleResponseRequestModeEnum;
    ruleType: AwsLambdaRuleResponseRuleTypeEnum;
    source: RuleSource;
    status?: AwsLambdaRuleResponseStatusEnum;
    target: AwsLambdaRuleResponseTarget;
    version?: string;
}
