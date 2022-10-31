package shared

type ZapierRulePatchRequestModeEnum string

const (
	ZapierRulePatchRequestModeEnumSingle ZapierRulePatchRequestModeEnum = "single"
	ZapierRulePatchRequestModeEnumBatch  ZapierRulePatchRequestModeEnum = "batch"
)

type ZapierRulePatchRuleTypeEnum string

const (
	ZapierRulePatchRuleTypeEnumHTTPZapier ZapierRulePatchRuleTypeEnum = "http/zapier"
)

type ZapierRulePatchStatusEnum string

const (
	ZapierRulePatchStatusEnumEnabled  ZapierRulePatchStatusEnum = "enabled"
	ZapierRulePatchStatusEnumDisabled ZapierRulePatchStatusEnum = "disabled"
)

type ZapierRulePatchTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type ZapierRulePatchTarget struct {
	Headers      []ZapierRulePatchTargetHeaders `json:"headers,omitempty"`
	SigningKeyID *string                        `json:"signingKeyId,omitempty"`
	URL          *string                        `json:"url,omitempty"`
}

type ZapierRulePatch struct {
	RequestMode *ZapierRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *ZapierRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                     `json:"source,omitempty"`
	Status      *ZapierRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *ZapierRulePatchTarget          `json:"target,omitempty"`
}
