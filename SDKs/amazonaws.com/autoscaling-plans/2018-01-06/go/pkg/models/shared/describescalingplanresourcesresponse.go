package shared



type DescribeScalingPlanResourcesResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ScalingPlanResources []ScalingPlanResource `json:"ScalingPlanResources,omitempty"`
    
}

