package shared




type AwsLambdaRuleResponseRequestModeEnum string

const (
    AwsLambdaRuleResponseRequestModeEnumSingle AwsLambdaRuleResponseRequestModeEnum = "single"
)



type AwsLambdaRuleResponseRuleTypeEnum string

const (
    AwsLambdaRuleResponseRuleTypeEnumAwsLambda AwsLambdaRuleResponseRuleTypeEnum = "aws/lambda"
)



type AwsLambdaRuleResponseStatusEnum string

const (
    AwsLambdaRuleResponseStatusEnumEnabled AwsLambdaRuleResponseStatusEnum = "enabled"
AwsLambdaRuleResponseStatusEnumDisabled AwsLambdaRuleResponseStatusEnum = "disabled"
)


type AwsLambdaRuleResponseTarget struct {
    Authentication interface{} `json:"authentication"`
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *string `json:"format,omitempty"`
    FunctionName string `json:"functionName"`
    Region string `json:"region"`
    
}

type AwsLambdaRuleResponse struct {
    Links map[string]interface{} `json:"_links,omitempty"`
    AppID *string `json:"appId,omitempty"`
    Created *float64 `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Modified *float64 `json:"modified,omitempty"`
    RequestMode AwsLambdaRuleResponseRequestModeEnum `json:"requestMode"`
    RuleType AwsLambdaRuleResponseRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *AwsLambdaRuleResponseStatusEnum `json:"status,omitempty"`
    Target AwsLambdaRuleResponseTarget `json:"target"`
    Version *string `json:"version,omitempty"`
    
}

