package shared

// EndpointConfiguration
// A complex type for endpoints. A resource must be valid and active when you add it as an endpoint.
type EndpointConfiguration struct {
	ClientIPPreservationEnabled *bool   `json:"ClientIPPreservationEnabled,omitempty"`
	EndpointID                  *string `json:"EndpointId,omitempty"`
	Weight                      *int64  `json:"Weight,omitempty"`
}
