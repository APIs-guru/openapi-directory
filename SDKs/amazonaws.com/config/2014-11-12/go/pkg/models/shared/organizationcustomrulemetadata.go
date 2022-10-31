package shared



type OrganizationCustomRuleMetadata struct {
    Description *string `json:"Description,omitempty"`
    InputParameters *string `json:"InputParameters,omitempty"`
    LambdaFunctionArn string `json:"LambdaFunctionArn"`
    MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency,omitempty"`
    OrganizationConfigRuleTriggerTypes []OrganizationConfigRuleTriggerTypeEnum `json:"OrganizationConfigRuleTriggerTypes"`
    ResourceIDScope *string `json:"ResourceIdScope,omitempty"`
    ResourceTypesScope []string `json:"ResourceTypesScope,omitempty"`
    TagKeyScope *string `json:"TagKeyScope,omitempty"`
    TagValueScope *string `json:"TagValueScope,omitempty"`
    
}

