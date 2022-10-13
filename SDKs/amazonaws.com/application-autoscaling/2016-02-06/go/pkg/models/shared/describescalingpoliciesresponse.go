package shared

type DescribeScalingPoliciesResponse struct {
	NextToken       *string         `json:"NextToken"`
	ScalingPolicies []ScalingPolicy `json:"ScalingPolicies"`
}
