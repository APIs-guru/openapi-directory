package shared

type AmqpRuleResponseRequestModeEnum string

const (
	AmqpRuleResponseRequestModeEnumSingle AmqpRuleResponseRequestModeEnum = "single"
)

type AmqpRuleResponseRuleTypeEnum string

const (
	AmqpRuleResponseRuleTypeEnumAmqp AmqpRuleResponseRuleTypeEnum = "amqp"
)

type AmqpRuleResponseStatusEnum string

const (
	AmqpRuleResponseStatusEnumEnabled  AmqpRuleResponseStatusEnum = "enabled"
	AmqpRuleResponseStatusEnumDisabled AmqpRuleResponseStatusEnum = "disabled"
)

type AmqpRuleResponseTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpRuleResponseTarget struct {
	Enveloped *bool                           `json:"enveloped"`
	Format    *string                         `json:"format"`
	Headers   []AmqpRuleResponseTargetHeaders `json:"headers"`
	QueueID   string                          `json:"queueId"`
}

type AmqpRuleResponse struct {
	Links       map[string]interface{}          `json:"_links"`
	AppID       *string                         `json:"appId"`
	Created     *float64                        `json:"created"`
	ID          *string                         `json:"id"`
	Modified    *float64                        `json:"modified"`
	RequestMode AmqpRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AmqpRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                      `json:"source"`
	Status      *AmqpRuleResponseStatusEnum     `json:"status"`
	Target      AmqpRuleResponseTarget          `json:"target"`
	Version     *string                         `json:"version"`
}
