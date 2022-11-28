package shared

// AssessmentRunFilter
// Used as the request parameter in the <a>ListAssessmentRuns</a> action.
type AssessmentRunFilter struct {
	CompletionTimeRange  *TimestampRange          `json:"completionTimeRange,omitempty"`
	DurationRange        *DurationRange           `json:"durationRange,omitempty"`
	NamePattern          *string                  `json:"namePattern,omitempty"`
	RulesPackageArns     []string                 `json:"rulesPackageArns,omitempty"`
	StartTimeRange       *TimestampRange          `json:"startTimeRange,omitempty"`
	StateChangeTimeRange *TimestampRange          `json:"stateChangeTimeRange,omitempty"`
	States               []AssessmentRunStateEnum `json:"states,omitempty"`
}
