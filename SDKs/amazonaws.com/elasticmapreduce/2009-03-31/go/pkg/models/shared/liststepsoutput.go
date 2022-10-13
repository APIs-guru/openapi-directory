package shared

type ListStepsOutput struct {
	Marker *string       `json:"Marker"`
	Steps  []StepSummary `json:"Steps"`
}
