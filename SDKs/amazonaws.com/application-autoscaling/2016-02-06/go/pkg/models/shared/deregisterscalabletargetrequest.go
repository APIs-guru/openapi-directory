package shared



type DeregisterScalableTargetRequest struct {
    ResourceID string `json:"ResourceId"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    
}

