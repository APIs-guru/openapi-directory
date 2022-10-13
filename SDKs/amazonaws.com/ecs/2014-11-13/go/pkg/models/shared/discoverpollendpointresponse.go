package shared

type DiscoverPollEndpointResponse struct {
	Endpoint          *string `json:"endpoint"`
	TelemetryEndpoint *string `json:"telemetryEndpoint"`
}
