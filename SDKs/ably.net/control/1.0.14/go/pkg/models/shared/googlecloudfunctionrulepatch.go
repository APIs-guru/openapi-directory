package shared




type GoogleCloudFunctionRulePatchRequestModeEnum string

const (
    GoogleCloudFunctionRulePatchRequestModeEnumSingle GoogleCloudFunctionRulePatchRequestModeEnum = "single"
GoogleCloudFunctionRulePatchRequestModeEnumBatch GoogleCloudFunctionRulePatchRequestModeEnum = "batch"
)



type GoogleCloudFunctionRulePatchRuleTypeEnum string

const (
    GoogleCloudFunctionRulePatchRuleTypeEnumHTTPGoogleCloudFunction GoogleCloudFunctionRulePatchRuleTypeEnum = "http/google-cloud-function"
)



type GoogleCloudFunctionRulePatchStatusEnum string

const (
    GoogleCloudFunctionRulePatchStatusEnumEnabled GoogleCloudFunctionRulePatchStatusEnum = "enabled"
GoogleCloudFunctionRulePatchStatusEnumDisabled GoogleCloudFunctionRulePatchStatusEnum = "disabled"
)



type GoogleCloudFunctionRulePatchTargetFormatEnum string

const (
    GoogleCloudFunctionRulePatchTargetFormatEnumJSON GoogleCloudFunctionRulePatchTargetFormatEnum = "json"
)


type GoogleCloudFunctionRulePatchTargetHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type GoogleCloudFunctionRulePatchTarget struct {
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *GoogleCloudFunctionRulePatchTargetFormatEnum `json:"format,omitempty"`
    FunctionName *string `json:"functionName,omitempty"`
    Headers []GoogleCloudFunctionRulePatchTargetHeaders `json:"headers,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    Region *string `json:"region,omitempty"`
    SigningKeyID *string `json:"signingKeyId,omitempty"`
    
}

type GoogleCloudFunctionRulePatch struct {
    RequestMode *GoogleCloudFunctionRulePatchRequestModeEnum `json:"requestMode,omitempty"`
    RuleType *GoogleCloudFunctionRulePatchRuleTypeEnum `json:"ruleType,omitempty"`
    Source *RuleSource `json:"source,omitempty"`
    Status *GoogleCloudFunctionRulePatchStatusEnum `json:"status,omitempty"`
    Target *GoogleCloudFunctionRulePatchTarget `json:"target,omitempty"`
    
}

