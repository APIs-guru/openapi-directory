package shared

type DescribeScalableTargetsResponse struct {
	NextToken       *string          `json:"NextToken"`
	ScalableTargets []ScalableTarget `json:"ScalableTargets"`
}
