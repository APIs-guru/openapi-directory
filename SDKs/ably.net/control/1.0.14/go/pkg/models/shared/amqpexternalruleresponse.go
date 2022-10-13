package shared

type AmqpExternalRuleResponseRequestModeEnum string

const (
	AmqpExternalRuleResponseRequestModeEnumSingle AmqpExternalRuleResponseRequestModeEnum = "single"
)

type AmqpExternalRuleResponseRuleTypeEnum string

const (
	AmqpExternalRuleResponseRuleTypeEnumAmqpExternal AmqpExternalRuleResponseRuleTypeEnum = "amqp/external"
)

type AmqpExternalRuleResponseStatusEnum string

const (
	AmqpExternalRuleResponseStatusEnumEnabled  AmqpExternalRuleResponseStatusEnum = "enabled"
	AmqpExternalRuleResponseStatusEnumDisabled AmqpExternalRuleResponseStatusEnum = "disabled"
)

type AmqpExternalRuleResponseTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpExternalRuleResponseTarget struct {
	Enveloped          *bool                                   `json:"enveloped"`
	Format             *string                                 `json:"format"`
	Headers            []AmqpExternalRuleResponseTargetHeaders `json:"headers"`
	MandatoryRoute     bool                                    `json:"mandatoryRoute"`
	MessageTTL         *int64                                  `json:"messageTtl"`
	PersistentMessages bool                                    `json:"persistentMessages"`
	RoutingKey         string                                  `json:"routingKey"`
	URL                string                                  `json:"url"`
}

type AmqpExternalRuleResponse struct {
	Links       map[string]interface{}                  `json:"_links"`
	AppID       *string                                 `json:"appId"`
	Created     *float64                                `json:"created"`
	ID          *string                                 `json:"id"`
	Modified    *float64                                `json:"modified"`
	RequestMode AmqpExternalRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AmqpExternalRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                              `json:"source"`
	Status      *AmqpExternalRuleResponseStatusEnum     `json:"status"`
	Target      AmqpExternalRuleResponseTarget          `json:"target"`
	Version     *string                                 `json:"version"`
}
