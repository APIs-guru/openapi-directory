package shared



type RegisterScalableTargetRequest struct {
    MaxCapacity *int64 `json:"MaxCapacity,omitempty"`
    MinCapacity *int64 `json:"MinCapacity,omitempty"`
    ResourceID string `json:"ResourceId"`
    RoleArn *string `json:"RoleARN,omitempty"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    SuspendedState *SuspendedState `json:"SuspendedState,omitempty"`
    
}

