package shared

type Summary struct {
	Name                *FindingEnum        `json:"name,omitempty"`
	ReasonCodeSummaries []ReasonCodeSummary `json:"reasonCodeSummaries,omitempty"`
	Value               *float64            `json:"value,omitempty"`
}
