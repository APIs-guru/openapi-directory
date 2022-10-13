package shared

type AwsSqsRulePostRequestModeEnum string

const (
	AwsSqsRulePostRequestModeEnumSingle AwsSqsRulePostRequestModeEnum = "single"
)

type AwsSqsRulePostRuleTypeEnum string

const (
	AwsSqsRulePostRuleTypeEnumAwsSqs AwsSqsRulePostRuleTypeEnum = "aws/sqs"
)

type AwsSqsRulePostStatusEnum string

const (
	AwsSqsRulePostStatusEnumEnabled  AwsSqsRulePostStatusEnum = "enabled"
	AwsSqsRulePostStatusEnumDisabled AwsSqsRulePostStatusEnum = "disabled"
)

type AwsSqsRulePostTarget struct {
	Authentication interface{} `json:"authentication"`
	AwsAccountID   string      `json:"awsAccountId"`
	Enveloped      *bool       `json:"enveloped"`
	Format         *string     `json:"format"`
	QueueName      string      `json:"queueName"`
	Region         string      `json:"region"`
}

type AwsSqsRulePost struct {
	RequestMode AwsSqsRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AwsSqsRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                    `json:"source"`
	Status      *AwsSqsRulePostStatusEnum     `json:"status"`
	Target      AwsSqsRulePostTarget          `json:"target"`
}
