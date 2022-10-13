package shared

type OrganizationCustomRuleMetadata struct {
	Description                        *string                                 `json:"Description"`
	InputParameters                    *string                                 `json:"InputParameters"`
	LambdaFunctionArn                  string                                  `json:"LambdaFunctionArn"`
	MaximumExecutionFrequency          *MaximumExecutionFrequencyEnum          `json:"MaximumExecutionFrequency"`
	OrganizationConfigRuleTriggerTypes []OrganizationConfigRuleTriggerTypeEnum `json:"OrganizationConfigRuleTriggerTypes"`
	ResourceIDScope                    *string                                 `json:"ResourceIdScope"`
	ResourceTypesScope                 []string                                `json:"ResourceTypesScope"`
	TagKeyScope                        *string                                 `json:"TagKeyScope"`
	TagValueScope                      *string                                 `json:"TagValueScope"`
}
