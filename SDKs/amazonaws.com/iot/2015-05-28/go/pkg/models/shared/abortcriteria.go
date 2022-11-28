package shared

// AbortCriteria
// The criteria that determine when and how a job abort takes place.
type AbortCriteria struct {
	Action                    AbortActionEnum             `json:"action"`
	FailureType               JobExecutionFailureTypeEnum `json:"failureType"`
	MinNumberOfExecutedThings int64                       `json:"minNumberOfExecutedThings"`
	ThresholdPercentage       float64                     `json:"thresholdPercentage"`
}
