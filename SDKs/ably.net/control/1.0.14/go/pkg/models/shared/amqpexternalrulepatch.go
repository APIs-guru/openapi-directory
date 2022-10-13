package shared

type AmqpExternalRulePatchRequestModeEnum string

const (
	AmqpExternalRulePatchRequestModeEnumSingle AmqpExternalRulePatchRequestModeEnum = "single"
)

type AmqpExternalRulePatchRuleTypeEnum string

const (
	AmqpExternalRulePatchRuleTypeEnumAmqpExternal AmqpExternalRulePatchRuleTypeEnum = "amqp/external"
)

type AmqpExternalRulePatchStatusEnum string

const (
	AmqpExternalRulePatchStatusEnumEnabled  AmqpExternalRulePatchStatusEnum = "enabled"
	AmqpExternalRulePatchStatusEnumDisabled AmqpExternalRulePatchStatusEnum = "disabled"
)

type AmqpExternalRulePatchTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AmqpExternalRulePatchTarget struct {
	Enveloped          *bool                                `json:"enveloped"`
	Format             *string                              `json:"format"`
	Headers            []AmqpExternalRulePatchTargetHeaders `json:"headers"`
	MandatoryRoute     *bool                                `json:"mandatoryRoute"`
	MessageTTL         *int64                               `json:"messageTtl"`
	PersistentMessages *bool                                `json:"persistentMessages"`
	RoutingKey         *string                              `json:"routingKey"`
	URL                *string                              `json:"url"`
}

type AmqpExternalRulePatch struct {
	RequestMode *AmqpExternalRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *AmqpExternalRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                           `json:"source"`
	Status      *AmqpExternalRulePatchStatusEnum      `json:"status"`
	Target      *AmqpExternalRulePatchTarget          `json:"target"`
}
