package shared

type Summary struct {
	Name                *FindingEnum        `json:"name"`
	ReasonCodeSummaries []ReasonCodeSummary `json:"reasonCodeSummaries"`
	Value               *float64            `json:"value"`
}
