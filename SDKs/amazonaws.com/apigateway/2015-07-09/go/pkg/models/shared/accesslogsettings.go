package shared

// AccessLogSettings
// Access log settings, including the access log format and access log destination ARN.
type AccessLogSettings struct {
	DestinationArn *string `json:"destinationArn,omitempty"`
	Format         *string `json:"format,omitempty"`
}
