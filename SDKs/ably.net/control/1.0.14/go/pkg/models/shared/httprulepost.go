package shared

type HTTPRulePostRequestModeEnum string

const (
	HTTPRulePostRequestModeEnumSingle HTTPRulePostRequestModeEnum = "single"
	HTTPRulePostRequestModeEnumBatch  HTTPRulePostRequestModeEnum = "batch"
)

type HTTPRulePostRuleTypeEnum string

const (
	HTTPRulePostRuleTypeEnumHTTP HTTPRulePostRuleTypeEnum = "http"
)

type HTTPRulePostStatusEnum string

const (
	HTTPRulePostStatusEnumEnabled  HTTPRulePostStatusEnum = "enabled"
	HTTPRulePostStatusEnumDisabled HTTPRulePostStatusEnum = "disabled"
)

type HTTPRulePostTargetFormatEnum string

const (
	HTTPRulePostTargetFormatEnumJSON    HTTPRulePostTargetFormatEnum = "json"
	HTTPRulePostTargetFormatEnumMsgpack HTTPRulePostTargetFormatEnum = "msgpack"
)

type HTTPRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type HTTPRulePostTarget struct {
	Enveloped    *bool                        `json:"enveloped"`
	Format       HTTPRulePostTargetFormatEnum `json:"format"`
	Headers      []HTTPRulePostTargetHeaders  `json:"headers"`
	SigningKeyID *string                      `json:"signingKeyId"`
	URL          string                       `json:"url"`
}

type HTTPRulePost struct {
	RequestMode HTTPRulePostRequestModeEnum `json:"requestMode"`
	RuleType    HTTPRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                  `json:"source"`
	Status      *HTTPRulePostStatusEnum     `json:"status"`
	Target      HTTPRulePostTarget          `json:"target"`
}
