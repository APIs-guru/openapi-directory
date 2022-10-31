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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type HTTPRulePatchTarget struct {
	Enveloped    *bool                          `json:"enveloped,omitempty"`
	Format       *HTTPRulePatchTargetFormatEnum `json:"format,omitempty"`
	Headers      []HTTPRulePatchTargetHeaders   `json:"headers,omitempty"`
	SigningKeyID *string                        `json:"signingKeyId,omitempty"`
	URL          *string                        `json:"url,omitempty"`
}

type HTTPRulePatch struct {
	RequestMode *HTTPRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *HTTPRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                   `json:"source,omitempty"`
	Status      *HTTPRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *HTTPRulePatchTarget          `json:"target,omitempty"`
}
