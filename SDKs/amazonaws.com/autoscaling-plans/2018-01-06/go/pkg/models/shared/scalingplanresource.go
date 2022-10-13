package shared

type ScalingPlanResource struct {
	ResourceID           string                `json:"ResourceId"`
	ScalableDimension    ScalableDimensionEnum `json:"ScalableDimension"`
	ScalingPlanName      string                `json:"ScalingPlanName"`
	ScalingPlanVersion   int64                 `json:"ScalingPlanVersion"`
	ScalingPolicies      []ScalingPolicy       `json:"ScalingPolicies"`
	ScalingStatusCode    ScalingStatusCodeEnum `json:"ScalingStatusCode"`
	ScalingStatusMessage *string               `json:"ScalingStatusMessage"`
	ServiceNamespace     ServiceNamespaceEnum  `json:"ServiceNamespace"`
}
