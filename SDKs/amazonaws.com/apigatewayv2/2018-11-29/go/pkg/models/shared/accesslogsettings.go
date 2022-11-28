package shared

// AccessLogSettings
// Settings for logging access in a stage.
type AccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn,omitempty"`
	Format         *string `json:"Format,omitempty"`
}
