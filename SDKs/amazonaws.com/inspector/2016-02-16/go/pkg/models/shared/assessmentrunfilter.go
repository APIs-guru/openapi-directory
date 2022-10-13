package shared

type AssessmentRunFilter struct {
	CompletionTimeRange  *TimestampRange          `json:"completionTimeRange"`
	DurationRange        *DurationRange           `json:"durationRange"`
	NamePattern          *string                  `json:"namePattern"`
	RulesPackageArns     []string                 `json:"rulesPackageArns"`
	StartTimeRange       *TimestampRange          `json:"startTimeRange"`
	StateChangeTimeRange *TimestampRange          `json:"stateChangeTimeRange"`
	States               []AssessmentRunStateEnum `json:"states"`
}
