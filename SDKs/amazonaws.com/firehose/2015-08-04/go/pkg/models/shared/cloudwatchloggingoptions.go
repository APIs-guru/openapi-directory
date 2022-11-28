package shared

// CloudWatchLoggingOptions
// Describes the Amazon CloudWatch logging options for your delivery stream.
type CloudWatchLoggingOptions struct {
	Enabled       *bool   `json:"Enabled,omitempty"`
	LogGroupName  *string `json:"LogGroupName,omitempty"`
	LogStreamName *string `json:"LogStreamName,omitempty"`
}
