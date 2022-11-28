package shared

// DescribeScalingPoliciesOutput
// Represents the returned data in response to a request operation.
type DescribeScalingPoliciesOutput struct {
	NextToken       *string         `json:"NextToken,omitempty"`
	ScalingPolicies []ScalingPolicy `json:"ScalingPolicies,omitempty"`
}
