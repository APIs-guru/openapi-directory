package shared

type ReasonCodeSummary struct {
	Name  *FindingReasonCodeEnum `json:"name,omitempty"`
	Value *float64               `json:"value,omitempty"`
}
