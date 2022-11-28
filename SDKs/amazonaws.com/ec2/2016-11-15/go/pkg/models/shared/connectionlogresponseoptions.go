package shared

// ConnectionLogResponseOptions
// Information about the client connection logging options for a Client VPN endpoint.
type ConnectionLogResponseOptions struct {
	CloudwatchLogGroup  *string
	CloudwatchLogStream *string
	Enabled             *bool
}
