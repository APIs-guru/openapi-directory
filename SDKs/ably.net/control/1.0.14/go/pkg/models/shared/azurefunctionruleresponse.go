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
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}

type AzureFunctionRuleResponseTarget struct {
	AzureAppID        string                                     `json:"azureAppId"`
	AzureFunctionName string                                     `json:"azureFunctionName"`
	Enveloped         *bool                                      `json:"enveloped,omitempty"`
	Format            *AzureFunctionRuleResponseTargetFormatEnum `json:"format,omitempty"`
	Headers           []AzureFunctionRuleResponseTargetHeaders   `json:"headers,omitempty"`
	SigningKeyID      *string                                    `json:"signingKeyId,omitempty"`
}

type AzureFunctionRuleResponse struct {
	Links       map[string]interface{}                   `json:"_links,omitempty"`
	AppID       *string                                  `json:"appId,omitempty"`
	Created     *float64                                 `json:"created,omitempty"`
	ID          *string                                  `json:"id,omitempty"`
	Modified    *float64                                 `json:"modified,omitempty"`
	RequestMode AzureFunctionRuleResponseRequestModeEnum `json:"requestMode"`
	RuleType    AzureFunctionRuleResponseRuleTypeEnum    `json:"ruleType"`
	Source      RuleSource                               `json:"source"`
	Status      *AzureFunctionRuleResponseStatusEnum     `json:"status,omitempty"`
	Target      AzureFunctionRuleResponseTarget          `json:"target"`
	Version     *string                                  `json:"version,omitempty"`
}
