package shared

type CancelReplayResponse struct {
	ReplayArn   *string          `json:"ReplayArn"`
	State       *ReplayStateEnum `json:"State"`
	StateReason *string          `json:"StateReason"`
}
