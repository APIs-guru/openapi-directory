package shared



type UpdateScalingPlanRequest struct {
    ApplicationSource *ApplicationSource `json:"ApplicationSource,omitempty"`
    ScalingInstructions []ScalingInstruction `json:"ScalingInstructions,omitempty"`
    ScalingPlanName string `json:"ScalingPlanName"`
    ScalingPlanVersion int64 `json:"ScalingPlanVersion"`
    
}

