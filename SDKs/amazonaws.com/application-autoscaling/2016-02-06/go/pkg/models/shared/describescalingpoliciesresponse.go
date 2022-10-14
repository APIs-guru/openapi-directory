package shared

type DescribeScalingPoliciesResponse struct {
	NextToken       *string         `json:"NextToken,omitempty"`
	ScalingPolicies []ScalingPolicy `json:"ScalingPolicies,omitempty"`
}
