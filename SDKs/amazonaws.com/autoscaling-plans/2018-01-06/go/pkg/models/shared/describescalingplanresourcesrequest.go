package shared



type DescribeScalingPlanResourcesRequest struct {
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ScalingPlanName string `json:"ScalingPlanName"`
    ScalingPlanVersion int64 `json:"ScalingPlanVersion"`
    
}

