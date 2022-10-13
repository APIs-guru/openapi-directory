package shared

type GoogleCloudFunctionRulePostRequestModeEnum string

const (
	GoogleCloudFunctionRulePostRequestModeEnumSingle GoogleCloudFunctionRulePostRequestModeEnum = "single"
	GoogleCloudFunctionRulePostRequestModeEnumBatch  GoogleCloudFunctionRulePostRequestModeEnum = "batch"
)

type GoogleCloudFunctionRulePostRuleTypeEnum string

const (
	GoogleCloudFunctionRulePostRuleTypeEnumHTTPGoogleCloudFunction GoogleCloudFunctionRulePostRuleTypeEnum = "http/google-cloud-function"
)

type GoogleCloudFunctionRulePostTargetFormatEnum string

const (
	GoogleCloudFunctionRulePostTargetFormatEnumJSON GoogleCloudFunctionRulePostTargetFormatEnum = "json"
)

type GoogleCloudFunctionRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type GoogleCloudFunctionRulePostTarget struct {
	Enveloped    *bool                                        `json:"enveloped"`
	Format       *GoogleCloudFunctionRulePostTargetFormatEnum `json:"format"`
	FunctionName string                                       `json:"functionName"`
	Headers      []GoogleCloudFunctionRulePostTargetHeaders   `json:"headers"`
	ProjectID    string                                       `json:"projectId"`
	Region       string                                       `json:"region"`
	SigningKeyID *string                                      `json:"signingKeyId"`
}

type GoogleCloudFunctionRulePost struct {
	RequestMode GoogleCloudFunctionRulePostRequestModeEnum `json:"requestMode"`
	RuleType    GoogleCloudFunctionRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                                 `json:"source"`
	Target      GoogleCloudFunctionRulePostTarget          `json:"target"`
}
