package shared

type EvaluateOnExit struct {
	Action         RetryActionEnum `json:"action"`
	OnExitCode     *string         `json:"onExitCode,omitempty"`
	OnReason       *string         `json:"onReason,omitempty"`
	OnStatusReason *string         `json:"onStatusReason,omitempty"`
}
