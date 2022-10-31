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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AmqpExternalRulePatchTarget struct {
	Enveloped          *bool                                `json:"enveloped,omitempty"`
	Format             *string                              `json:"format,omitempty"`
	Headers            []AmqpExternalRulePatchTargetHeaders `json:"headers,omitempty"`
	MandatoryRoute     *bool                                `json:"mandatoryRoute,omitempty"`
	MessageTTL         *int64                               `json:"messageTtl,omitempty"`
	PersistentMessages *bool                                `json:"persistentMessages,omitempty"`
	RoutingKey         *string                              `json:"routingKey,omitempty"`
	URL                *string                              `json:"url,omitempty"`
}

type AmqpExternalRulePatch struct {
	RequestMode *AmqpExternalRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *AmqpExternalRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                           `json:"source,omitempty"`
	Status      *AmqpExternalRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *AmqpExternalRulePatchTarget          `json:"target,omitempty"`
}
