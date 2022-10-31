package shared



type ListStepsOutput struct {
    Marker *string `json:"Marker,omitempty"`
    Steps []StepSummary `json:"Steps,omitempty"`
    
}

