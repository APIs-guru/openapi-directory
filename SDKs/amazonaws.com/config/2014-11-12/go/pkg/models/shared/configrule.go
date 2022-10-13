package shared

type ConfigRule struct {
	ConfigRuleArn             *string                        `json:"ConfigRuleArn"`
	ConfigRuleID              *string                        `json:"ConfigRuleId"`
	ConfigRuleName            *string                        `json:"ConfigRuleName"`
	ConfigRuleState           *ConfigRuleStateEnum           `json:"ConfigRuleState"`
	CreatedBy                 *string                        `json:"CreatedBy"`
	Description               *string                        `json:"Description"`
	InputParameters           *string                        `json:"InputParameters"`
	MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency"`
	Scope                     *Scope                         `json:"Scope"`
	Source                    Source                         `json:"Source"`
}
