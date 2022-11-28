package shared

// ActionThreshold
//
//	The trigger threshold of the action.
type ActionThreshold struct {
	ActionThresholdType  ThresholdTypeEnum `json:"ActionThresholdType"`
	ActionThresholdValue float64           `json:"ActionThresholdValue"`
}
