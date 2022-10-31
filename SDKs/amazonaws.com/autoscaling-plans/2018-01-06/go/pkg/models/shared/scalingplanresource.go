package shared



type ScalingPlanResource struct {
    ResourceID string `json:"ResourceId"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ScalingPlanName string `json:"ScalingPlanName"`
    ScalingPlanVersion int64 `json:"ScalingPlanVersion"`
    ScalingPolicies []ScalingPolicy `json:"ScalingPolicies,omitempty"`
    ScalingStatusCode ScalingStatusCodeEnum `json:"ScalingStatusCode"`
    ScalingStatusMessage *string `json:"ScalingStatusMessage,omitempty"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    
}

