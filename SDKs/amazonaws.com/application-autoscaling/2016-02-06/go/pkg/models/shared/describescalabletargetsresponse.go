package shared

type DescribeScalableTargetsResponse struct {
	NextToken       *string          `json:"NextToken,omitempty"`
	ScalableTargets []ScalableTarget `json:"ScalableTargets,omitempty"`
}
