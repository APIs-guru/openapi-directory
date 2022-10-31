package shared

type HTTPRuleResponseRequestModeEnum string

const (
	HTTPRuleResponseRequestModeEnumSingle HTTPRuleResponseRequestModeEnum = "single"
	HTTPRuleResponseRequestModeEnumBatch  HTTPRuleResponseRequestModeEnum = "batch"
)

type HTTPRuleResponseRuleTypeEnum string

const (
	HTTPRuleResponseRuleTypeEnumHTTP HTTPRuleResponseRuleTypeEnum = "http"
)

type HTTPRuleResponseStatusEnum string

const (
	HTTPRuleResponseStatusEnumEnabled  HTTPRuleResponseStatusEnum = "enabled"
	HTTPRuleResponseStatusEnumDisabled HTTPRuleResponseStatusEnum = "disabled"
)

type HTTPRuleResponseTargetFormatEnum string

const (
	HTTPRuleResponseTargetFormatEnumJSON    HTTPRuleResponseTargetFormatEnum = "json"
	HTTPRuleResponseTargetFormatEnumMsgpack HTTPRuleResponseTargetFormatEnum = "msgpack"
)

type HTTPRuleResponseTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type HTTPRuleResponseTarget struct {
	Enveloped    *bool                            `json:"enveloped,omitempty"`
	Format       HTTPRuleResponseTargetFormatEnum `json:"format"`
	Headers      []HTTPRuleResponseTargetHeaders  `json:"headers,omitempty"`
	SigningKeyID *string                          `json:"signingKeyId,omitempty"`
	URL          string                           `json:"url"`
}

type HTTPRuleResponse struct {
	Links       map[string]interface{}          `json:"_links,omitempty"`
	AppID       *string                         `json:"appId,omitempty"`
	Created     *float64                        `json:"created,omitempty"`
	ID          *string                         `json:"id,omitempty"`
	Modified    *float64                        `json:"modified,omitempty"`
	RequestMode HTTPRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    HTTPRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                      `json:"source"`
	Status      *HTTPRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      HTTPRuleResponseTarget          `json:"target"`
	Version     *string                         `json:"version,omitempty"`
}
