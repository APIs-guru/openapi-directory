package shared

type AzureFunctionRuleResponseRequestModeEnum string

const (
	AzureFunctionRuleResponseRequestModeEnumSingle AzureFunctionRuleResponseRequestModeEnum = "single"
	AzureFunctionRuleResponseRequestModeEnumBatch  AzureFunctionRuleResponseRequestModeEnum = "batch"
)

type AzureFunctionRuleResponseRuleTypeEnum string

const (
	AzureFunctionRuleResponseRuleTypeEnumHTTPAzureFunction AzureFunctionRuleResponseRuleTypeEnum = "http/azure-function"
)

type AzureFunctionRuleResponseStatusEnum string

const (
	AzureFunctionRuleResponseStatusEnumEnabled  AzureFunctionRuleResponseStatusEnum = "enabled"
	AzureFunctionRuleResponseStatusEnumDisabled AzureFunctionRuleResponseStatusEnum = "disabled"
)

type AzureFunctionRuleResponseTargetFormatEnum string

const (
	AzureFunctionRuleResponseTargetFormatEnumJSON AzureFunctionRuleResponseTargetFormatEnum = "json"
)

type AzureFunctionRuleResponseTargetHeaders struct {
	Name  *string `json:"name"`
	Value *string `json:"value"`
}

type AzureFunctionRuleResponseTarget struct {
	AzureAppID        string                                     `json:"azureAppId"`
	AzureFunctionName string                                     `json:"azureFunctionName"`
	Enveloped         *bool                                      `json:"enveloped"`
	Format            *AzureFunctionRuleResponseTargetFormatEnum `json:"format"`
	Headers           []AzureFunctionRuleResponseTargetHeaders   `json:"headers"`
	SigningKeyID      *string                                    `json:"signingKeyId"`
}

type AzureFunctionRuleResponse struct {
	Links       map[string]interface{}                   `json:"_links"`
	AppID       *string                                  `json:"appId"`
	Created     *float64                                 `json:"created"`
	ID          *string                                  `json:"id"`
	Modified    *float64                                 `json:"modified"`
	RequestMode AzureFunctionRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AzureFunctionRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                               `json:"source"`
	Status      *AzureFunctionRuleResponseStatusEnum     `json:"status"`
	Target      AzureFunctionRuleResponseTarget          `json:"target"`
	Version     *string                                  `json:"version"`
}
