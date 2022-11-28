package shared

// OrganizationManagedRuleMetadata
// An object that specifies organization managed rule metadata such as resource type and ID of Amazon Web Services resource along with the rule identifier. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
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
