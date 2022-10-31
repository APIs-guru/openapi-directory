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
    AmqpRulePatchStatusEnumEnabled AmqpRulePatchStatusEnum = "enabled"
AmqpRulePatchStatusEnumDisabled AmqpRulePatchStatusEnum = "disabled"
)


type AmqpRulePatchTargetHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type AmqpRulePatchTarget struct {
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *string `json:"format,omitempty"`
    Headers []AmqpRulePatchTargetHeaders `json:"headers,omitempty"`
    QueueID *string `json:"queueId,omitempty"`
    
}

type AmqpRulePatch struct {
    RequestMode *AmqpRulePatchRequestModeEnum `json:"requestMode,omitempty"`
    RuleType *AmqpRulePatchRuleTypeEnum `json:"ruleType,omitempty"`
    Source *RuleSource `json:"source,omitempty"`
    Status *AmqpRulePatchStatusEnum `json:"status,omitempty"`
    Target *AmqpRulePatchTarget `json:"target,omitempty"`
    
}

