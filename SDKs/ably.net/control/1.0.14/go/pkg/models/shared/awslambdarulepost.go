package shared




type AwsLambdaRulePostRequestModeEnum string

const (
    AwsLambdaRulePostRequestModeEnumSingle AwsLambdaRulePostRequestModeEnum = "single"
)



type AwsLambdaRulePostRuleTypeEnum string

const (
    AwsLambdaRulePostRuleTypeEnumAwsLambda AwsLambdaRulePostRuleTypeEnum = "aws/lambda"
)



type AwsLambdaRulePostStatusEnum string

const (
    AwsLambdaRulePostStatusEnumEnabled AwsLambdaRulePostStatusEnum = "enabled"
AwsLambdaRulePostStatusEnumDisabled AwsLambdaRulePostStatusEnum = "disabled"
)


type AwsLambdaRulePostTarget struct {
    Authentication interface{} `json:"authentication"`
    Enveloped *bool `json:"enveloped,omitempty"`
    FunctionName string `json:"functionName"`
    Region string `json:"region"`
    
}

type AwsLambdaRulePost struct {
    RequestMode AwsLambdaRulePostRequestModeEnum `json:"requestMode"`
    RuleType AwsLambdaRulePostRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *AwsLambdaRulePostStatusEnum `json:"status,omitempty"`
    Target AwsLambdaRulePostTarget `json:"target"`
    
}

