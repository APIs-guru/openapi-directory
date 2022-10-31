package shared



type DeleteScheduledActionRequest struct {
    ResourceID string `json:"ResourceId"`
    ScalableDimension ScalableDimensionEnum `json:"ScalableDimension"`
    ScheduledActionName string `json:"ScheduledActionName"`
    ServiceNamespace ServiceNamespaceEnum `json:"ServiceNamespace"`
    
}

