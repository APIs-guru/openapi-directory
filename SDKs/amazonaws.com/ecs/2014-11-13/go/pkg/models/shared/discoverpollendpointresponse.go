package shared

type DiscoverPollEndpointResponse struct {
	Endpoint          *string `json:"endpoint,omitempty"`
	TelemetryEndpoint *string `json:"telemetryEndpoint,omitempty"`
}
