package shared

// Endpoint
// Network information for accessing a cluster or instance. Client programs must specify a valid endpoint to access these Amazon DocumentDB resources.
type Endpoint struct {
	Address      *string
	HostedZoneID *string
	Port         *int64
}
