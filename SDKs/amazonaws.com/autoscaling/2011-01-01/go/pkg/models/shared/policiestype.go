package shared

type PoliciesType struct {
	NextToken       *string
	ScalingPolicies []ScalingPolicy
}
