package shared

// EvaluateOnExit
// Specifies a set of conditions to be met, and an action to take (<code>RETRY</code> or <code>EXIT</code>) if all conditions are met.
type EvaluateOnExit struct {
	Action         RetryActionEnum `json:"action"`
	OnExitCode     *string         `json:"onExitCode,omitempty"`
	OnReason       *string         `json:"onReason,omitempty"`
	OnStatusReason *string         `json:"onStatusReason,omitempty"`
}
