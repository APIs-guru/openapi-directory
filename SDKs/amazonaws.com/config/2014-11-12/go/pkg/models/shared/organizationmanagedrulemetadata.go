package shared

type OrganizationManagedRuleMetadata struct {
	Description               *string                        `json:"Description"`
	InputParameters           *string                        `json:"InputParameters"`
	MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency"`
	ResourceIDScope           *string                        `json:"ResourceIdScope"`
	ResourceTypesScope        []string                       `json:"ResourceTypesScope"`
	RuleIdentifier            string                         `json:"RuleIdentifier"`
	TagKeyScope               *string                        `json:"TagKeyScope"`
	TagValueScope             *string                        `json:"TagValueScope"`
}
