package shared

type AwsSqsRulePatchRequestModeEnum string

const (
	AwsSqsRulePatchRequestModeEnumSingle AwsSqsRulePatchRequestModeEnum = "single"
)

type AwsSqsRulePatchRuleTypeEnum string

const (
	AwsSqsRulePatchRuleTypeEnumAwsSqs AwsSqsRulePatchRuleTypeEnum = "aws/sqs"
)

type AwsSqsRulePatchStatusEnum string

const (
	AwsSqsRulePatchStatusEnumEnabled  AwsSqsRulePatchStatusEnum = "enabled"
	AwsSqsRulePatchStatusEnumDisabled AwsSqsRulePatchStatusEnum = "disabled"
)

type AwsSqsRulePatchTarget struct {
	Authentication *interface{} `json:"authentication"`
	AwsAccountID   *string      `json:"awsAccountId"`
	Enveloped      *bool        `json:"enveloped"`
	Format         *string      `json:"format"`
	QueueName      *string      `json:"queueName"`
	Region         *string      `json:"region"`
}

type AwsSqsRulePatch struct {
	RequestMode *AwsSqsRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *AwsSqsRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                     `json:"source"`
	Status      *AwsSqsRulePatchStatusEnum      `json:"status"`
	Target      *AwsSqsRulePatchTarget          `json:"target"`
}
