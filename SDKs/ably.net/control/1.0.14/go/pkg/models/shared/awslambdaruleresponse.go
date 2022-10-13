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
	AwsLambdaRuleResponseStatusEnumEnabled  AwsLambdaRuleResponseStatusEnum = "enabled"
	AwsLambdaRuleResponseStatusEnumDisabled AwsLambdaRuleResponseStatusEnum = "disabled"
)

type AwsLambdaRuleResponseTarget struct {
	Authentication interface{} `json:"authentication"`
	Enveloped      *bool       `json:"enveloped"`
	Format         *string     `json:"format"`
	FunctionName   string      `json:"functionName"`
	Region         string      `json:"region"`
}

type AwsLambdaRuleResponse struct {
	Links       map[string]interface{}               `json:"_links"`
	AppID       *string                              `json:"appId"`
	Created     *float64                             `json:"created"`
	ID          *string                              `json:"id"`
	Modified    *float64                             `json:"modified"`
	RequestMode AwsLambdaRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AwsLambdaRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                           `json:"source"`
	Status      *AwsLambdaRuleResponseStatusEnum     `json:"status"`
	Target      AwsLambdaRuleResponseTarget          `json:"target"`
	Version     *string                              `json:"version"`
}
