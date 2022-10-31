package shared

type AssessmentRunFilter struct {
	CompletionTimeRange  *TimestampRange          `json:"completionTimeRange,omitempty"`
	DurationRange        *DurationRange           `json:"durationRange,omitempty"`
	NamePattern          *string                  `json:"namePattern,omitempty"`
	RulesPackageArns     []string                 `json:"rulesPackageArns,omitempty"`
	StartTimeRange       *TimestampRange          `json:"startTimeRange,omitempty"`
	StateChangeTimeRange *TimestampRange          `json:"stateChangeTimeRange,omitempty"`
	States               []AssessmentRunStateEnum `json:"states,omitempty"`
}
