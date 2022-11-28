package shared

// OrganizationCustomRuleMetadata
// An object that specifies organization custom rule metadata such as resource type, resource ID of Amazon Web Services resource, Lambda function ARN, and organization trigger types that trigger Config to evaluate your Amazon Web Services resources against a rule. It also provides the frequency with which you want Config to run evaluations for the rule if the trigger type is periodic.
type OrganizationCustomRuleMetadata struct {
	Description                        *string                                 `json:"Description,omitempty"`
	InputParameters                    *string                                 `json:"InputParameters,omitempty"`
	LambdaFunctionArn                  string                                  `json:"LambdaFunctionArn"`
	MaximumExecutionFrequency          *MaximumExecutionFrequencyEnum          `json:"MaximumExecutionFrequency,omitempty"`
	OrganizationConfigRuleTriggerTypes []OrganizationConfigRuleTriggerTypeEnum `json:"OrganizationConfigRuleTriggerTypes"`
	ResourceIDScope                    *string                                 `json:"ResourceIdScope,omitempty"`
	ResourceTypesScope                 []string                                `json:"ResourceTypesScope,omitempty"`
	TagKeyScope                        *string                                 `json:"TagKeyScope,omitempty"`
	TagValueScope                      *string                                 `json:"TagValueScope,omitempty"`
}
