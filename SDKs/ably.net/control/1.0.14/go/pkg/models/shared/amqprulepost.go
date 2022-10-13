package shared

type AmqpRulePostRequestModeEnum string

const (
	AmqpRulePostRequestModeEnumSingle AmqpRulePostRequestModeEnum = "single"
)

type AmqpRulePostRuleTypeEnum string

const (
	AmqpRulePostRuleTypeEnumAmqp AmqpRulePostRuleTypeEnum = "amqp"
)

type AmqpRulePostStatusEnum string

const (
	AmqpRulePostStatusEnumEnabled  AmqpRulePostStatusEnum = "enabled"
	AmqpRulePostStatusEnumDisabled AmqpRulePostStatusEnum = "disabled"
)

type AmqpRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpRulePostTarget struct {
	Enveloped *bool                       `json:"enveloped"`
	Format    *string                     `json:"format"`
	Headers   []AmqpRulePostTargetHeaders `json:"headers"`
	QueueID   string                      `json:"queueId"`
}

type AmqpRulePost struct {
	RequestMode AmqpRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AmqpRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                  `json:"source"`
	Status      *AmqpRulePostStatusEnum     `json:"status"`
	Target      AmqpRulePostTarget          `json:"target"`
}
