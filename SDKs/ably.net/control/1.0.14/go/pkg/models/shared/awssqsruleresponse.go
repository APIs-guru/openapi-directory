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
	Enveloped      *bool       `json:"enveloped,omitempty"`
	Format         *string     `json:"format,omitempty"`
	QueueName      string      `json:"queueName"`
	Region         string      `json:"region"`
}

type AwsSqsRuleResponse struct {
	Links       map[string]interface{}            `json:"_links,omitempty"`
	AppID       *string                           `json:"appId,omitempty"`
	Created     *float64                          `json:"created,omitempty"`
	ID          *string                           `json:"id,omitempty"`
	Modified    *float64                          `json:"modified,omitempty"`
	RequestMode AwsSqsRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AwsSqsRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                        `json:"source"`
	Status      *AwsSqsRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      AwsSqsRuleResponseTarget          `json:"target"`
	Version     *string                           `json:"version,omitempty"`
}
