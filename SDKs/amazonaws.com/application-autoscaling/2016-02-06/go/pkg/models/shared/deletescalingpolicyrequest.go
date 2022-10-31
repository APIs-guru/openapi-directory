package shared



type DeleteScalingPolicyRequest struct {
    PolicyName string `json:"PolicyName"`
    ResourceID string `json:"ResourceId"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    
}

