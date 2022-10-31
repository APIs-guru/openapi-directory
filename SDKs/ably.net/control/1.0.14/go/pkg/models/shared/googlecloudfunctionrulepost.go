package shared




type GoogleCloudFunctionRulePostRequestModeEnum string

const (
    GoogleCloudFunctionRulePostRequestModeEnumSingle GoogleCloudFunctionRulePostRequestModeEnum = "single"
GoogleCloudFunctionRulePostRequestModeEnumBatch GoogleCloudFunctionRulePostRequestModeEnum = "batch"
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
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type GoogleCloudFunctionRulePostTarget struct {
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *GoogleCloudFunctionRulePostTargetFormatEnum `json:"format,omitempty"`
    FunctionName string `json:"functionName"`
    Headers []GoogleCloudFunctionRulePostTargetHeaders `json:"headers,omitempty"`
    ProjectID string `json:"projectId"`
    Region string `json:"region"`
    SigningKeyID *string `json:"signingKeyId,omitempty"`
    
}

type GoogleCloudFunctionRulePost struct {
    RequestMode GoogleCloudFunctionRulePostRequestModeEnum `json:"requestMode"`
    RuleType GoogleCloudFunctionRulePostRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Target GoogleCloudFunctionRulePostTarget `json:"target"`
    
}

