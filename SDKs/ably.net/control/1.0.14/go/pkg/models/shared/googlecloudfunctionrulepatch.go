package shared

type GoogleCloudFunctionRulePatchRequestModeEnum string

const (
	GoogleCloudFunctionRulePatchRequestModeEnumSingle GoogleCloudFunctionRulePatchRequestModeEnum = "single"
	GoogleCloudFunctionRulePatchRequestModeEnumBatch  GoogleCloudFunctionRulePatchRequestModeEnum = "batch"
)

type GoogleCloudFunctionRulePatchRuleTypeEnum string

const (
	GoogleCloudFunctionRulePatchRuleTypeEnumHTTPGoogleCloudFunction GoogleCloudFunctionRulePatchRuleTypeEnum = "http/google-cloud-function"
)

type GoogleCloudFunctionRulePatchStatusEnum string

const (
	GoogleCloudFunctionRulePatchStatusEnumEnabled  GoogleCloudFunctionRulePatchStatusEnum = "enabled"
	GoogleCloudFunctionRulePatchStatusEnumDisabled GoogleCloudFunctionRulePatchStatusEnum = "disabled"
)

type GoogleCloudFunctionRulePatchTargetFormatEnum string

const (
	GoogleCloudFunctionRulePatchTargetFormatEnumJSON GoogleCloudFunctionRulePatchTargetFormatEnum = "json"
)

type GoogleCloudFunctionRulePatchTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type GoogleCloudFunctionRulePatchTarget struct {
	Enveloped    *bool                                         `json:"enveloped"`
	Format       *GoogleCloudFunctionRulePatchTargetFormatEnum `json:"format"`
	FunctionName *string                                       `json:"functionName"`
	Headers      []GoogleCloudFunctionRulePatchTargetHeaders   `json:"headers"`
	ProjectID    *string                                       `json:"projectId"`
	Region       *string                                       `json:"region"`
	SigningKeyID *string                                       `json:"signingKeyId"`
}

type GoogleCloudFunctionRulePatch struct {
	RequestMode *GoogleCloudFunctionRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *GoogleCloudFunctionRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                                  `json:"source"`
	Status      *GoogleCloudFunctionRulePatchStatusEnum      `json:"status"`
	Target      *GoogleCloudFunctionRulePatchTarget          `json:"target"`
}
