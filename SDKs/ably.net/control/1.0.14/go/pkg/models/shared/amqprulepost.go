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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AmqpRulePostTarget struct {
	Enveloped *bool                       `json:"enveloped,omitempty"`
	Format    *string                     `json:"format,omitempty"`
	Headers   []AmqpRulePostTargetHeaders `json:"headers,omitempty"`
	QueueID   string                      `json:"queueId"`
}

type AmqpRulePost struct {
	RequestMode AmqpRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AmqpRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                  `json:"source"`
	Status      *AmqpRulePostStatusEnum     `json:"status,omitempty"`
	Target      AmqpRulePostTarget          `json:"target"`
}
