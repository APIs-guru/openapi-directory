package shared

type AzureFunctionRulePatchRequestModeEnum string

const (
	AzureFunctionRulePatchRequestModeEnumSingle AzureFunctionRulePatchRequestModeEnum = "single"
	AzureFunctionRulePatchRequestModeEnumBatch  AzureFunctionRulePatchRequestModeEnum = "batch"
)

type AzureFunctionRulePatchRuleTypeEnum string

const (
	AzureFunctionRulePatchRuleTypeEnumHTTPAzureFunction AzureFunctionRulePatchRuleTypeEnum = "http/azure-function"
)

type AzureFunctionRulePatchStatusEnum string

const (
	AzureFunctionRulePatchStatusEnumEnabled  AzureFunctionRulePatchStatusEnum = "enabled"
	AzureFunctionRulePatchStatusEnumDisabled AzureFunctionRulePatchStatusEnum = "disabled"
)

type AzureFunctionRulePatchTargetFormatEnum string

const (
	AzureFunctionRulePatchTargetFormatEnumJSON AzureFunctionRulePatchTargetFormatEnum = "json"
)

type AzureFunctionRulePatchTargetHeaders struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AzureFunctionRulePatchTarget struct {
	AzureAppID        *string                                 `json:"azureAppId,omitempty"`
	AzureFunctionName *string                                 `json:"azureFunctionName,omitempty"`
	Enveloped         *bool                                   `json:"enveloped,omitempty"`
	Format            *AzureFunctionRulePatchTargetFormatEnum `json:"format,omitempty"`
	Headers           []AzureFunctionRulePatchTargetHeaders   `json:"headers,omitempty"`
	SigningKeyID      *string                                 `json:"signingKeyId,omitempty"`
}

type AzureFunctionRulePatch struct {
	RequestMode *AzureFunctionRulePatchRequestModeEnum `json:"requestMode,omitempty"`
	RuleType    *AzureFunctionRulePatchRuleTypeEnum    `json:"ruleType,omitempty"`
	Source      *RuleSource                            `json:"source,omitempty"`
	Status      *AzureFunctionRulePatchStatusEnum      `json:"status,omitempty"`
	Target      *AzureFunctionRulePatchTarget          `json:"target,omitempty"`
}
