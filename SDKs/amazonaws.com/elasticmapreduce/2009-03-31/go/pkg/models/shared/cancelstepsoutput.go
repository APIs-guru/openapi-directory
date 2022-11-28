package shared

// CancelStepsOutput
//
//	The output for the <a>CancelSteps</a> operation.
type CancelStepsOutput struct {
	CancelStepsInfoList []CancelStepsInfo `json:"CancelStepsInfoList,omitempty"`
}
