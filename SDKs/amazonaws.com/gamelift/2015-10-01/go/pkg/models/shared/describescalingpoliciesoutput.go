package shared

type DescribeScalingPoliciesOutput struct {
	NextToken       *string         `json:"NextToken"`
	ScalingPolicies []ScalingPolicy `json:"ScalingPolicies"`
}
