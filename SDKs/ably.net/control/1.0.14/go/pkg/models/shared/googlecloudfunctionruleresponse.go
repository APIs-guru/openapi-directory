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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type GoogleCloudFunctionRuleResponseTarget struct {
	Enveloped    *bool                                            `json:"enveloped"`
	Format       *GoogleCloudFunctionRuleResponseTargetFormatEnum `json:"format"`
	FunctionName string                                           `json:"functionName"`
	Headers      []GoogleCloudFunctionRuleResponseTargetHeaders   `json:"headers"`
	ProjectID    string                                           `json:"projectId"`
	Region       string                                           `json:"region"`
	SigningKeyID *string                                          `json:"signingKeyId"`
}

type GoogleCloudFunctionRuleResponse struct {
	Links       map[string]interface{}                         `json:"_links"`
	AppID       *string                                        `json:"appId"`
	Created     *float64                                       `json:"created"`
	ID          *string                                        `json:"id"`
	Modified    *float64                                       `json:"modified"`
	RequestMode GoogleCloudFunctionRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    GoogleCloudFunctionRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                                     `json:"source"`
	Status      *GoogleCloudFunctionRuleResponseStatusEnum     `json:"status"`
	Target      GoogleCloudFunctionRuleResponseTarget          `json:"target"`
	Version     *string                                        `json:"version"`
}
