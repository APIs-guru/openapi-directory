package shared

type ZapierRulePostRequestModeEnum string

const (
	ZapierRulePostRequestModeEnumSingle ZapierRulePostRequestModeEnum = "single"
	ZapierRulePostRequestModeEnumBatch  ZapierRulePostRequestModeEnum = "batch"
)

type ZapierRulePostRuleTypeEnum string

const (
	ZapierRulePostRuleTypeEnumHTTPZapier ZapierRulePostRuleTypeEnum = "http/zapier"
)

type ZapierRulePostStatusEnum string

const (
	ZapierRulePostStatusEnumEnabled  ZapierRulePostStatusEnum = "enabled"
	ZapierRulePostStatusEnumDisabled ZapierRulePostStatusEnum = "disabled"
)

type ZapierRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type ZapierRulePostTarget struct {
	Headers      []ZapierRulePostTargetHeaders `json:"headers"`
	SigningKeyID *string                       `json:"signingKeyId"`
	URL          string                        `json:"url"`
}

type ZapierRulePost struct {
	RequestMode ZapierRulePostRequestModeEnum `json:"requestMode"`
	RuleType    ZapierRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                    `json:"source"`
	Status      *ZapierRulePostStatusEnum     `json:"status"`
	Target      ZapierRulePostTarget          `json:"target"`
}
