package shared

type DescribeScalingPlanResourcesResponse struct {
	NextToken            *string               `json:"NextToken"`
	ScalingPlanResources []ScalingPlanResource `json:"ScalingPlanResources"`
}
