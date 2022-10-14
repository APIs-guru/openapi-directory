package shared

type EndpointConfiguration struct {
	ClientIPPreservationEnabled *bool   `json:"ClientIPPreservationEnabled,omitempty"`
	EndpointID                  *string `json:"EndpointId,omitempty"`
	Weight                      *int64  `json:"Weight,omitempty"`
}
