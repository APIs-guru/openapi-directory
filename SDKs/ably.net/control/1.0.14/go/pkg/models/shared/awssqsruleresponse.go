package shared

type AwsSqsRuleResponseRequestModeEnum string

const (
	AwsSqsRuleResponseRequestModeEnumSingle AwsSqsRuleResponseRequestModeEnum = "single"
)

type AwsSqsRuleResponseRuleTypeEnum string

const (
	AwsSqsRuleResponseRuleTypeEnumAwsSqs AwsSqsRuleResponseRuleTypeEnum = "aws/sqs"
)

type AwsSqsRuleResponseStatusEnum string

const (
	AwsSqsRuleResponseStatusEnumEnabled  AwsSqsRuleResponseStatusEnum = "enabled"
	AwsSqsRuleResponseStatusEnumDisabled AwsSqsRuleResponseStatusEnum = "disabled"
)

type AwsSqsRuleResponseTarget struct {
	Authentication interface{} `json:"authentication"`
	AwsAccountID   string      `json:"awsAccountId"`
	Enveloped      *bool       `json:"enveloped"`
	Format         *string     `json:"format"`
	QueueName      string      `json:"queueName"`
	Region         string      `json:"region"`
}

type AwsSqsRuleResponse struct {
	Links       map[string]interface{}            `json:"_links"`
	AppID       *string                           `json:"appId"`
	Created     *float64                          `json:"created"`
	ID          *string                           `json:"id"`
	Modified    *float64                          `json:"modified"`
	RequestMode AwsSqsRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AwsSqsRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                        `json:"source"`
	Status      *AwsSqsRuleResponseStatusEnum     `json:"status"`
	Target      AwsSqsRuleResponseTarget          `json:"target"`
	Version     *string                           `json:"version"`
}
