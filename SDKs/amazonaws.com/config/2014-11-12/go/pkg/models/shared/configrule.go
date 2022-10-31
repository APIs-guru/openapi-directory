package shared



type ConfigRule struct {
    ConfigRuleArn *string `json:"ConfigRuleArn,omitempty"`
    ConfigRuleID *string `json:"ConfigRuleId,omitempty"`
    ConfigRuleName *string `json:"ConfigRuleName,omitempty"`
    ConfigRuleState *ConfigRuleStateEnum `json:"ConfigRuleState,omitempty"`
    CreatedBy *string `json:"CreatedBy,omitempty"`
    Description *string `json:"Description,omitempty"`
    InputParameters *string `json:"InputParameters,omitempty"`
    MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency,omitempty"`
    Scope *Scope `json:"Scope,omitempty"`
    Source Source `json:"Source"`
    
}

