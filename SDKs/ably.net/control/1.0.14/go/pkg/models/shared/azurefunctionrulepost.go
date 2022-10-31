package shared




type AzureFunctionRulePostRequestModeEnum string

const (
    AzureFunctionRulePostRequestModeEnumSingle AzureFunctionRulePostRequestModeEnum = "single"
AzureFunctionRulePostRequestModeEnumBatch AzureFunctionRulePostRequestModeEnum = "batch"
)



type AzureFunctionRulePostRuleTypeEnum string

const (
    AzureFunctionRulePostRuleTypeEnumHTTPAzureFunction AzureFunctionRulePostRuleTypeEnum = "http/azure-function"
)



type AzureFunctionRulePostStatusEnum string

const (
    AzureFunctionRulePostStatusEnumEnabled AzureFunctionRulePostStatusEnum = "enabled"
AzureFunctionRulePostStatusEnumDisabled AzureFunctionRulePostStatusEnum = "disabled"
)



type AzureFunctionRulePostTargetFormatEnum string

const (
    AzureFunctionRulePostTargetFormatEnumJSON AzureFunctionRulePostTargetFormatEnum = "json"
)


type AzureFunctionRulePostTargetHeaders struct {
    Name *string `json:"name,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type AzureFunctionRulePostTarget struct {
    AzureAppID string `json:"azureAppId"`
    AzureFunctionName string `json:"azureFunctionName"`
    Enveloped *bool `json:"enveloped,omitempty"`
    Format *AzureFunctionRulePostTargetFormatEnum `json:"format,omitempty"`
    Headers []AzureFunctionRulePostTargetHeaders `json:"headers,omitempty"`
    SigningKeyID *string `json:"signingKeyId,omitempty"`
    
}

type AzureFunctionRulePost struct {
    RequestMode AzureFunctionRulePostRequestModeEnum `json:"requestMode"`
    RuleType AzureFunctionRulePostRuleTypeEnum `json:"ruleType"`
    Source RuleSource `json:"source"`
    Status *AzureFunctionRulePostStatusEnum `json:"status,omitempty"`
    Target AzureFunctionRulePostTarget `json:"target"`
    
}

