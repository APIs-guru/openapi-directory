package shared

type DescribeScalingActivitiesResponse struct {
	NextToken         *string           `json:"NextToken,omitempty"`
	ScalingActivities []ScalingActivity `json:"ScalingActivities,omitempty"`
}
