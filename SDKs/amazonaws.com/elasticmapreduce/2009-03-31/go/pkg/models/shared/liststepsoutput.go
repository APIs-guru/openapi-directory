package shared

// ListStepsOutput
// This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
type ListStepsOutput struct {
	Marker *string       `json:"Marker,omitempty"`
	Steps  []StepSummary `json:"Steps,omitempty"`
}
