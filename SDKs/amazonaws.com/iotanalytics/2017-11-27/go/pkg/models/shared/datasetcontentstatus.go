package shared

// DatasetContentStatus
// The state of the dataset contents and the reason they are in this state.
type DatasetContentStatus struct {
	Reason *string                  `json:"reason,omitempty"`
	State  *DatasetContentStateEnum `json:"state,omitempty"`
}
