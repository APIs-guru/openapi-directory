package shared

type HTTPRulePatchRequestModeEnum string

const (
	HTTPRulePatchRequestModeEnumSingle HTTPRulePatchRequestModeEnum = "single"
	HTTPRulePatchRequestModeEnumBatch  HTTPRulePatchRequestModeEnum = "batch"
)

type HTTPRulePatchRuleTypeEnum string

const (
	HTTPRulePatchRuleTypeEnumHTTP HTTPRulePatchRuleTypeEnum = "http"
)

type HTTPRulePatchStatusEnum string

const (
	HTTPRulePatchStatusEnumEnabled  HTTPRulePatchStatusEnum = "enabled"
	HTTPRulePatchStatusEnumDisabled HTTPRulePatchStatusEnum = "disabled"
)

type HTTPRulePatchTargetFormatEnum string

const (
	HTTPRulePatchTargetFormatEnumJSON    HTTPRulePatchTargetFormatEnum = "json"
	HTTPRulePatchTargetFormatEnumMsgpack HTTPRulePatchTargetFormatEnum = "msgpack"
)

type HTTPRulePatchTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type HTTPRulePatchTarget struct {
	Enveloped    *bool                          `json:"enveloped"`
	Format       *HTTPRulePatchTargetFormatEnum `json:"format"`
	Headers      []HTTPRulePatchTargetHeaders   `json:"headers"`
	SigningKeyID *string                        `json:"signingKeyId"`
	URL          *string                        `json:"url"`
}

type HTTPRulePatch struct {
	RequestMode *HTTPRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *HTTPRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                   `json:"source"`
	Status      *HTTPRulePatchStatusEnum      `json:"status"`
	Target      *HTTPRulePatchTarget          `json:"target"`
}
