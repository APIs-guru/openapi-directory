package shared

type DescribeScalingPlanResourcesRequest struct {
	MaxResults         *int64  `json:"MaxResults"`
	NextToken          *string `json:"NextToken"`
	ScalingPlanName    string  `json:"ScalingPlanName"`
	ScalingPlanVersion int64   `json:"ScalingPlanVersion"`
}
