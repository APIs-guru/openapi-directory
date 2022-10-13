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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type HTTPRuleResponseTarget struct {
	Enveloped    *bool                            `json:"enveloped"`
	Format       HTTPRuleResponseTargetFormatEnum `json:"format"`
	Headers      []HTTPRuleResponseTargetHeaders  `json:"headers"`
	SigningKeyID *string                          `json:"signingKeyId"`
	URL          string                           `json:"url"`
}

type HTTPRuleResponse struct {
	Links       map[string]interface{}          `json:"_links"`
	AppID       *string                         `json:"appId"`
	Created     *float64                        `json:"created"`
	ID          *string                         `json:"id"`
	Modified    *float64                        `json:"modified"`
	RequestMode HTTPRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    HTTPRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                      `json:"source"`
	Status      *HTTPRuleResponseStatusEnum     `json:"status"`
	Target      HTTPRuleResponseTarget          `json:"target"`
	Version     *string                         `json:"version"`
}
