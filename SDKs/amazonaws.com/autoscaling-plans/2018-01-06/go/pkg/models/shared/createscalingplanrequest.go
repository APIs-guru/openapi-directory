package shared

type CreateScalingPlanRequest struct {
	ApplicationSource   ApplicationSource    `json:"ApplicationSource"`
	ScalingInstructions []ScalingInstruction `json:"ScalingInstructions"`
	ScalingPlanName     string               `json:"ScalingPlanName"`
}
