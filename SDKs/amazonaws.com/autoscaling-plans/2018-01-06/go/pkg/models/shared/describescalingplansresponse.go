package shared

type DescribeScalingPlansResponse struct {
	NextToken    *string       `json:"NextToken"`
	ScalingPlans []ScalingPlan `json:"ScalingPlans"`
}
