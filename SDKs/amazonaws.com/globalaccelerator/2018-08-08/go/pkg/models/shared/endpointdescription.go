package shared

// EndpointDescription
// A complex type for an endpoint. Each endpoint group can include one or more endpoints, such as load balancers.
type EndpointDescription struct {
	ClientIPPreservationEnabled *bool            `json:"ClientIPPreservationEnabled,omitempty"`
	EndpointID                  *string          `json:"EndpointId,omitempty"`
	HealthReason                *string          `json:"HealthReason,omitempty"`
	HealthState                 *HealthStateEnum `json:"HealthState,omitempty"`
	Weight                      *int64           `json:"Weight,omitempty"`
}
