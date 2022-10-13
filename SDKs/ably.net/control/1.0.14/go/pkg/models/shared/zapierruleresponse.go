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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type ZapierRuleResponseTarget struct {
	Headers      []ZapierRuleResponseTargetHeaders `json:"headers"`
	SigningKeyID *string                           `json:"signingKeyId"`
	URL          string                            `json:"url"`
}

type ZapierRuleResponse struct {
	Links       map[string]interface{}            `json:"_links"`
	AppID       *string                           `json:"appId"`
	Created     *float64                          `json:"created"`
	ID          *string                           `json:"id"`
	Modified    *float64                          `json:"modified"`
	RequestMode ZapierRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    ZapierRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                        `json:"source"`
	Status      *ZapierRuleResponseStatusEnum     `json:"status"`
	Target      ZapierRuleResponseTarget          `json:"target"`
	Version     *string                           `json:"version"`
}
