package shared



type DescribeScalingPlansRequest struct {
    ApplicationSources []ApplicationSource `json:"ApplicationSources,omitempty"`
    MaxResults *int64 `json:"MaxResults,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    ScalingPlanNames []string `json:"ScalingPlanNames,omitempty"`
    ScalingPlanVersion *int64 `json:"ScalingPlanVersion,omitempty"`
    
}

