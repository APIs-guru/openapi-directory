package shared

type UpdateScalingPlanRequest struct {
	ApplicationSource   *ApplicationSource   `json:"ApplicationSource"`
	ScalingInstructions []ScalingInstruction `json:"ScalingInstructions"`
	ScalingPlanName     string               `json:"ScalingPlanName"`
	ScalingPlanVersion  int64                `json:"ScalingPlanVersion"`
}
