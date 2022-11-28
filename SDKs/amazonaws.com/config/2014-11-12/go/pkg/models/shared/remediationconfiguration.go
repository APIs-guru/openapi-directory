package shared

// RemediationConfiguration
// An object that represents the details about the remediation configuration that includes the remediation action, parameters, and data to execute the action.
type RemediationConfiguration struct {
	Arn                      *string                              `json:"Arn,omitempty"`
	Automatic                *bool                                `json:"Automatic,omitempty"`
	ConfigRuleName           string                               `json:"ConfigRuleName"`
	CreatedByService         *string                              `json:"CreatedByService,omitempty"`
	ExecutionControls        *ExecutionControls                   `json:"ExecutionControls,omitempty"`
	MaximumAutomaticAttempts *int64                               `json:"MaximumAutomaticAttempts,omitempty"`
	Parameters               map[string]RemediationParameterValue `json:"Parameters,omitempty"`
	ResourceType             *string                              `json:"ResourceType,omitempty"`
	RetryAttemptSeconds      *int64                               `json:"RetryAttemptSeconds,omitempty"`
	TargetID                 string                               `json:"TargetId"`
	TargetType               RemediationTargetTypeEnum            `json:"TargetType"`
	TargetVersion            *string                              `json:"TargetVersion,omitempty"`
}
