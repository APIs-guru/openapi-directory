package shared

type AmqpRulePatchRequestModeEnum string

const (
	AmqpRulePatchRequestModeEnumSingle AmqpRulePatchRequestModeEnum = "single"
)

type AmqpRulePatchRuleTypeEnum string

const (
	AmqpRulePatchRuleTypeEnumAmqp AmqpRulePatchRuleTypeEnum = "amqp"
)

type AmqpRulePatchStatusEnum string

const (
	AmqpRulePatchStatusEnumEnabled  AmqpRulePatchStatusEnum = "enabled"
	AmqpRulePatchStatusEnumDisabled AmqpRulePatchStatusEnum = "disabled"
)

type AmqpRulePatchTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpRulePatchTarget struct {
	Enveloped *bool                        `json:"enveloped"`
	Format    *string                      `json:"format"`
	Headers   []AmqpRulePatchTargetHeaders `json:"headers"`
	QueueID   *string                      `json:"queueId"`
}

type AmqpRulePatch struct {
	RequestMode *AmqpRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *AmqpRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                   `json:"source"`
	Status      *AmqpRulePatchStatusEnum      `json:"status"`
	Target      *AmqpRulePatchTarget          `json:"target"`
}
