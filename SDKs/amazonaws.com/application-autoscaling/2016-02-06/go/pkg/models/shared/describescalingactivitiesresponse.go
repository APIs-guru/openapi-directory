package shared

type DescribeScalingActivitiesResponse struct {
	NextToken         *string           `json:"NextToken"`
	ScalingActivities []ScalingActivity `json:"ScalingActivities"`
}
