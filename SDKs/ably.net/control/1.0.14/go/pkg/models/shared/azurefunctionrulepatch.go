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
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AzureFunctionRulePatchTarget struct {
	AzureAppID        *string                                 `json:"azureAppId"`
	AzureFunctionName *string                                 `json:"azureFunctionName"`
	Enveloped         *bool                                   `json:"enveloped"`
	Format            *AzureFunctionRulePatchTargetFormatEnum `json:"format"`
	Headers           []AzureFunctionRulePatchTargetHeaders   `json:"headers"`
	SigningKeyID      *string                                 `json:"signingKeyId"`
}

type AzureFunctionRulePatch struct {
	RequestMode *AzureFunctionRulePatchRequestModeEnum `json:"requestMode"`
	RuleType    *AzureFunctionRulePatchRuleTypeEnum    `json:"ruleType"`
	Source      *RuleSource                            `json:"source"`
	Status      *AzureFunctionRulePatchStatusEnum      `json:"status"`
	Target      *AzureFunctionRulePatchTarget          `json:"target"`
}
