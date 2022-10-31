package shared

type CancelReplayResponse struct {
	ReplayArn   *string          `json:"ReplayArn,omitempty"`
	State       *ReplayStateEnum `json:"State,omitempty"`
	StateReason *string          `json:"StateReason,omitempty"`
}
