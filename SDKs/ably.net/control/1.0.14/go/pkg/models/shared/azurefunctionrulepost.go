package shared

type AzureFunctionRulePostRequestModeEnum string

const (
	AzureFunctionRulePostRequestModeEnumSingle AzureFunctionRulePostRequestModeEnum = "single"
	AzureFunctionRulePostRequestModeEnumBatch  AzureFunctionRulePostRequestModeEnum = "batch"
)

type AzureFunctionRulePostRuleTypeEnum string

const (
	AzureFunctionRulePostRuleTypeEnumHTTPAzureFunction AzureFunctionRulePostRuleTypeEnum = "http/azure-function"
)

type AzureFunctionRulePostStatusEnum string

const (
	AzureFunctionRulePostStatusEnumEnabled  AzureFunctionRulePostStatusEnum = "enabled"
	AzureFunctionRulePostStatusEnumDisabled AzureFunctionRulePostStatusEnum = "disabled"
)

type AzureFunctionRulePostTargetFormatEnum string

const (
	AzureFunctionRulePostTargetFormatEnumJSON AzureFunctionRulePostTargetFormatEnum = "json"
)

type AzureFunctionRulePostTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AzureFunctionRulePostTarget struct {
	AzureAppID        string                                 `json:"azureAppId"`
	AzureFunctionName string                                 `json:"azureFunctionName"`
	Enveloped         *bool                                  `json:"enveloped"`
	Format            *AzureFunctionRulePostTargetFormatEnum `json:"format"`
	Headers           []AzureFunctionRulePostTargetHeaders   `json:"headers"`
	SigningKeyID      *string                                `json:"signingKeyId"`
}

type AzureFunctionRulePost struct {
	RequestMode AzureFunctionRulePostRequestModeEnum `json:"requestMode"`
	RuleType    AzureFunctionRulePostRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                           `json:"source"`
	Status      *AzureFunctionRulePostStatusEnum     `json:"status"`
	Target      AzureFunctionRulePostTarget          `json:"target"`
}
