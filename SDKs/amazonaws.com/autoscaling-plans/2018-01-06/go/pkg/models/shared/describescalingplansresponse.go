package shared



type DescribeScalingPlansResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    ScalingPlans []ScalingPlan `json:"ScalingPlans,omitempty"`
    
}

