package shared

type OrganizationManagedRuleMetadata struct {
	Description               *string                        `json:"Description,omitempty"`
	InputParameters           *string                        `json:"InputParameters,omitempty"`
	MaximumExecutionFrequency *MaximumExecutionFrequencyEnum `json:"MaximumExecutionFrequency,omitempty"`
	ResourceIDScope           *string                        `json:"ResourceIdScope,omitempty"`
	ResourceTypesScope        []string                       `json:"ResourceTypesScope,omitempty"`
	RuleIdentifier            string                         `json:"RuleIdentifier"`
	TagKeyScope               *string                        `json:"TagKeyScope,omitempty"`
	TagValueScope             *string                        `json:"TagValueScope,omitempty"`
}
