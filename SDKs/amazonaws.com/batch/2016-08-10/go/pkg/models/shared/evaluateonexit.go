package shared

type EvaluateOnExit struct {
	Action         RetryActionEnum `json:"action"`
	OnExitCode     *string         `json:"onExitCode"`
	OnReason       *string         `json:"onReason"`
	OnStatusReason *string         `json:"onStatusReason"`
}
