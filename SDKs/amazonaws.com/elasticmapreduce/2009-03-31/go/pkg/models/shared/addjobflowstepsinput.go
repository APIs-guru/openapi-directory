package shared



type AddJobFlowStepsInput struct {
    JobFlowID string `json:"JobFlowId"`
    Steps []StepConfig `json:"Steps"`
    
}

