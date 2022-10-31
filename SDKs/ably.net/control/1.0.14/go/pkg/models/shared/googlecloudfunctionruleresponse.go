package shared

type GoogleCloudFunctionRuleResponseRequestModeEnum string

const (
	GoogleCloudFunctionRuleResponseRequestModeEnumSingle GoogleCloudFunctionRuleResponseRequestModeEnum = "single"
	GoogleCloudFunctionRuleResponseRequestModeEnumBatch  GoogleCloudFunctionRuleResponseRequestModeEnum = "batch"
)

type GoogleCloudFunctionRuleResponseRuleTypeEnum string

const (
	GoogleCloudFunctionRuleResponseRuleTypeEnumHTTPGoogleCloudFunction GoogleCloudFunctionRuleResponseRuleTypeEnum = "http/google-cloud-function"
)

type GoogleCloudFunctionRuleResponseStatusEnum string

const (
	GoogleCloudFunctionRuleResponseStatusEnumEnabled  GoogleCloudFunctionRuleResponseStatusEnum = "enabled"
	GoogleCloudFunctionRuleResponseStatusEnumDisabled GoogleCloudFunctionRuleResponseStatusEnum = "disabled"
)

type GoogleCloudFunctionRuleResponseTargetFormatEnum string

const (
	GoogleCloudFunctionRuleResponseTargetFormatEnumJSON GoogleCloudFunctionRuleResponseTargetFormatEnum = "json"
)

type GoogleCloudFunctionRuleResponseTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type GoogleCloudFunctionRuleResponseTarget struct {
	Enveloped    *bool                                            `json:"enveloped,omitempty"`
	Format       *GoogleCloudFunctionRuleResponseTargetFormatEnum `json:"format,omitempty"`
	FunctionName string                                           `json:"functionName"`
	Headers      []GoogleCloudFunctionRuleResponseTargetHeaders   `json:"headers,omitempty"`
	ProjectID    string                                           `json:"projectId"`
	Region       string                                           `json:"region"`
	SigningKeyID *string                                          `json:"signingKeyId,omitempty"`
}

type GoogleCloudFunctionRuleResponse struct {
	Links       map[string]interface{}                         `json:"_links,omitempty"`
	AppID       *string                                        `json:"appId,omitempty"`
	Created     *float64                                       `json:"created,omitempty"`
	ID          *string                                        `json:"id,omitempty"`
	Modified    *float64                                       `json:"modified,omitempty"`
	RequestMode GoogleCloudFunctionRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    GoogleCloudFunctionRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                                     `json:"source"`
	Status      *GoogleCloudFunctionRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      GoogleCloudFunctionRuleResponseTarget          `json:"target"`
	Version     *string                                        `json:"version,omitempty"`
}
