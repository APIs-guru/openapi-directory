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
    AmqpExternalRuleResponseStatusEnumEnabled AmqpExternalRuleResponseStatusEnum = "enabled"
AmqpExternalRuleResponseStatusEnumDisabled AmqpExternalRuleResponseStatusEnum = "disabled"
)


type AmqpExternalRuleResponseTargetHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type AmqpExternalRuleResponseTarget struct {
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *string `json:"format,omitempty"`
    Headers []AmqpExternalRuleResponseTargetHeaders `json:"headers,omitempty"`
    MandatoryRoute bool `json:"mandatoryRoute"`
    MessageTTL *int64 `json:"messageTtl,omitempty"`
    PersistentMessages bool `json:"persistentMessages"`
    RoutingKey string `json:"routingKey"`
    URL string `json:"url"`
    
}

type AmqpExternalRuleResponse struct {
    Links map[string]interface{} `json:"_links,omitempty"`
    AppID *string `json:"appId,omitempty"`
    Created *float64 `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Modified *float64 `json:"modified,omitempty"`
    RequestMode AmqpExternalRuleResponseRequestModeEnum `json:"requestMode"`
    RuleType AmqpExternalRuleResponseRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *AmqpExternalRuleResponseStatusEnum `json:"status,omitempty"`
    Target AmqpExternalRuleResponseTarget `json:"target"`
    Version *string `json:"version,omitempty"`
    
}

