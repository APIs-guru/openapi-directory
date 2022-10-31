package shared

type AccessLogSettings struct {
	DestinationArn *string `json:"destinationArn,omitempty"`
	Format         *string `json:"format,omitempty"`
}
