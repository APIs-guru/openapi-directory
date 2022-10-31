package shared



type DescribeScalingPoliciesOutput struct {
    NextToken *string `json:"NextToken,omitempty"`
    ScalingPolicies []ScalingPolicy `json:"ScalingPolicies,omitempty"`
    
}

