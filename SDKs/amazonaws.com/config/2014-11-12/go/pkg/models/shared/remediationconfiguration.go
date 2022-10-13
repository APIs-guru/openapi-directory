package shared

type RemediationConfiguration struct {
	Arn                      *string                              `json:"Arn"`
	Automatic                *bool                                `json:"Automatic"`
	ConfigRuleName           string                               `json:"ConfigRuleName"`
	CreatedByService         *string                              `json:"CreatedByService"`
	ExecutionControls        *ExecutionControls                   `json:"ExecutionControls"`
	MaximumAutomaticAttempts *int64                               `json:"MaximumAutomaticAttempts"`
	Parameters               map[string]RemediationParameterValue `json:"Parameters"`
	ResourceType             *string                              `json:"ResourceType"`
	RetryAttemptSeconds      *int64                               `json:"RetryAttemptSeconds"`
	TargetID                 string                               `json:"TargetId"`
	TargetType               RemediationTargetTypeEnum            `json:"TargetType"`
	TargetVersion            *string                              `json:"TargetVersion"`
}
