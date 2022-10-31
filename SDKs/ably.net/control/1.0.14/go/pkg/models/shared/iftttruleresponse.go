package shared




type IftttRuleResponseRequestModeEnum string

const (
    IftttRuleResponseRequestModeEnumSingle IftttRuleResponseRequestModeEnum = "single"
)



type IftttRuleResponseRuleTypeEnum string

const (
    IftttRuleResponseRuleTypeEnumHTTPIfttt IftttRuleResponseRuleTypeEnum = "http/ifttt"
)



type IftttRuleResponseStatusEnum string

const (
    IftttRuleResponseStatusEnumEnabled IftttRuleResponseStatusEnum = "enabled"
IftttRuleResponseStatusEnumDisabled IftttRuleResponseStatusEnum = "disabled"
)


type IftttRuleResponseTarget struct {
    EventName string `json:"eventName"`
    WebhookKey string `json:"webhookKey"`
    
}

type IftttRuleResponse struct {
    Links map[string]interface{} `json:"_links,omitempty"`
    AppID *string `json:"appId,omitempty"`
    Created *float64 `json:"created,omitempty"`
    ID *string `json:"id,omitempty"`
    Modified *float64 `json:"modified,omitempty"`
    RequestMode IftttRuleResponseRequestModeEnum `json:"requestMode"`
    RuleType IftttRuleResponseRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *IftttRuleResponseStatusEnum `json:"status,omitempty"`
    Target IftttRuleResponseTarget `json:"target"`
    Version *string `json:"version,omitempty"`
    
}

