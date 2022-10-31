package shared




type HTTPRulePostRequestModeEnum string

const (
    HTTPRulePostRequestModeEnumSingle HTTPRulePostRequestModeEnum = "single"
HTTPRulePostRequestModeEnumBatch HTTPRulePostRequestModeEnum = "batch"
)



type HTTPRulePostRuleTypeEnum string

const (
    HTTPRulePostRuleTypeEnumHTTP HTTPRulePostRuleTypeEnum = "http"
)



type HTTPRulePostStatusEnum string

const (
    HTTPRulePostStatusEnumEnabled HTTPRulePostStatusEnum = "enabled"
HTTPRulePostStatusEnumDisabled HTTPRulePostStatusEnum = "disabled"
)



type HTTPRulePostTargetFormatEnum string

const (
    HTTPRulePostTargetFormatEnumJSON HTTPRulePostTargetFormatEnum = "json"
HTTPRulePostTargetFormatEnumMsgpack HTTPRulePostTargetFormatEnum = "msgpack"
)


type HTTPRulePostTargetHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type HTTPRulePostTarget struct {
    Enveloped *bool `json:"enveloped,omitempty"`
    Format HTTPRulePostTargetFormatEnum `json:"format"`
    Headers []HTTPRulePostTargetHeaders `json:"headers,omitempty"`
    SigningKeyID *string `json:"signingKeyId,omitempty"`
    URL string `json:"url"`
    
}

type HTTPRulePost struct {
    RequestMode HTTPRulePostRequestModeEnum `json:"requestMode"`
    RuleType HTTPRulePostRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *HTTPRulePostStatusEnum `json:"status,omitempty"`
    Target HTTPRulePostTarget `json:"target"`
    
}

