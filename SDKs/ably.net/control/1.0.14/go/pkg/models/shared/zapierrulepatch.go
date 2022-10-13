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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type ZapierRulePatchTarget struct {
	Headers      []ZapierRulePatchTargetHeaders `json:"headers"`
	SigningKeyID *string                        `json:"signingKeyId"`
	URL          *string                        `json:"url"`
}

type ZapierRulePatch struct {
	RequestMode *ZapierRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *ZapierRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                     `json:"source"`
	Status      *ZapierRulePatchStatusEnum      `json:"status"`
	Target      *ZapierRulePatchTarget          `json:"target"`
}
