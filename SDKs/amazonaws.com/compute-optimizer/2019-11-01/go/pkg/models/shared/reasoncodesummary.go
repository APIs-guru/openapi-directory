package shared

// ReasonCodeSummary
// A summary of a finding reason code.
type ReasonCodeSummary struct {
	Name  *FindingReasonCodeEnum `json:"name,omitempty"`
	Value *float64               `json:"value,omitempty"`
}
