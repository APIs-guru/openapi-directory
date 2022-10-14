package shared

type ZapierRuleResponseRequestModeEnum string

const (
	ZapierRuleResponseRequestModeEnumSingle ZapierRuleResponseRequestModeEnum = "single"
	ZapierRuleResponseRequestModeEnumBatch  ZapierRuleResponseRequestModeEnum = "batch"
)

type ZapierRuleResponseRuleTypeEnum string

const (
	ZapierRuleResponseRuleTypeEnumHTTPZapier ZapierRuleResponseRuleTypeEnum = "http/zapier"
)

type ZapierRuleResponseStatusEnum string

const (
	ZapierRuleResponseStatusEnumEnabled  ZapierRuleResponseStatusEnum = "enabled"
	ZapierRuleResponseStatusEnumDisabled ZapierRuleResponseStatusEnum = "disabled"
)

type ZapierRuleResponseTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ZapierRuleResponseTarget struct {
	Headers      []ZapierRuleResponseTargetHeaders `json:"headers,omitempty"`
	SigningKeyID *string                           `json:"signingKeyId,omitempty"`
	URL          string                            `json:"url"`
}

type ZapierRuleResponse struct {
	Links       map[string]interface{}            `json:"_links,omitempty"`
	AppID       *string                           `json:"appId,omitempty"`
	Created     *float64                          `json:"created,omitempty"`
	ID          *string                           `json:"id,omitempty"`
	Modified    *float64                          `json:"modified,omitempty"`
	RequestMode ZapierRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    ZapierRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                        `json:"source"`
	Status      *ZapierRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      ZapierRuleResponseTarget          `json:"target"`
	Version     *string                           `json:"version,omitempty"`
}
