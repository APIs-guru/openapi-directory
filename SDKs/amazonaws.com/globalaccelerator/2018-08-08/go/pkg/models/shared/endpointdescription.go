package shared



type EndpointDescription struct {
    ClientIPPreservationEnabled *bool `json:"ClientIPPreservationEnabled,omitempty"`
    EndpointID *string `json:"EndpointId,omitempty"`
    HealthReason *string `json:"HealthReason,omitempty"`
    HealthState *HealthStateEnum `json:"HealthState,omitempty"`
    Weight *int64 `json:"Weight,omitempty"`
    
}

