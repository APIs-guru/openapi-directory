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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpExternalRulePostTarget struct {
	Enveloped          *bool                               `json:"enveloped"`
	Format             *string                             `json:"format"`
	Headers            []AmqpExternalRulePostTargetHeaders `json:"headers"`
	MandatoryRoute     bool                                `json:"mandatoryRoute"`
	MessageTTL         *int64                              `json:"messageTtl"`
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
