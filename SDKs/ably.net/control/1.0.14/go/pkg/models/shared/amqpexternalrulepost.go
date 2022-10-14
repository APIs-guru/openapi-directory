package shared

type AmqpExternalRulePostRequestModeEnum string

const (
	AmqpExternalRulePostRequestModeEnumSingle AmqpExternalRulePostRequestModeEnum = "single"
)

type AmqpExternalRulePostRuleTypeEnum string

const (
	AmqpExternalRulePostRuleTypeEnumAmqpExternal AmqpExternalRulePostRuleTypeEnum = "amqp/external"
)

type AmqpExternalRulePostTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AmqpExternalRulePostTarget struct {
	Enveloped          *bool                               `json:"enveloped,omitempty"`
	Format             *string                             `json:"format,omitempty"`
	Headers            []AmqpExternalRulePostTargetHeaders `json:"headers,omitempty"`
	MandatoryRoute     bool                                `json:"mandatoryRoute"`
	MessageTTL         *int64                              `json:"messageTtl,omitempty"`
	PersistentMessages bool                                `json:"persistentMessages"`
	RoutingKey         string                              `json:"routingKey"`
	URL                string                              `json:"url"`
}

type AmqpExternalRulePost struct {
	RequestMode AmqpExternalRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AmqpExternalRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                          `json:"source"`
	Target      AmqpExternalRulePostTarget          `json:"target"`
}
