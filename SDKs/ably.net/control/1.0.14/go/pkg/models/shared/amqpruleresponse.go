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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AmqpRuleResponseTarget struct {
	Enveloped *bool                           `json:"enveloped,omitempty"`
	Format    *string                         `json:"format,omitempty"`
	Headers   []AmqpRuleResponseTargetHeaders `json:"headers,omitempty"`
	QueueID   string                          `json:"queueId"`
}

type AmqpRuleResponse struct {
	Links       map[string]interface{}          `json:"_links,omitempty"`
	AppID       *string                         `json:"appId,omitempty"`
	Created     *float64                        `json:"created,omitempty"`
	ID          *string                         `json:"id,omitempty"`
	Modified    *float64                        `json:"modified,omitempty"`
	RequestMode AmqpRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AmqpRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                      `json:"source"`
	Status      *AmqpRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      AmqpRuleResponseTarget          `json:"target"`
	Version     *string                         `json:"version,omitempty"`
}
