package shared




type AwsLambdaRulePatchRequestModeEnum string

const (
    AwsLambdaRulePatchRequestModeEnumSingle AwsLambdaRulePatchRequestModeEnum = "single"
)



type AwsLambdaRulePatchRuleTypeEnum string

const (
    AwsLambdaRulePatchRuleTypeEnumAwsLambda AwsLambdaRulePatchRuleTypeEnum = "aws/lambda"
)



type AwsLambdaRulePatchStatusEnum string

const (
    AwsLambdaRulePatchStatusEnumEnabled AwsLambdaRulePatchStatusEnum = "enabled"
AwsLambdaRulePatchStatusEnumDisabled AwsLambdaRulePatchStatusEnum = "disabled"
)


type AwsLambdaRulePatchTarget struct {
    Authentication interface{} `json:"authentication"`
    Enveloped *bool `json:"enveloped,omitempty"`
    FunctionName string `json:"functionName"`
    Region string `json:"region"`
    
}

type AwsLambdaRulePatch struct {
    RequestMode AwsLambdaRulePatchRequestModeEnum `json:"requestMode"`
    RuleType AwsLambdaRulePatchRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *AwsLambdaRulePatchStatusEnum `json:"status,omitempty"`
    Target AwsLambdaRulePatchTarget `json:"target"`
    
}

