package shared

// HTTPEndpointDestinationDescription
// Describes the HTTP endpoint destination.
type HTTPEndpointDestinationDescription struct {
	BufferingHints           *HTTPEndpointBufferingHints       `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions         `json:"CloudWatchLoggingOptions,omitempty"`
	EndpointConfiguration    *HTTPEndpointDescription          `json:"EndpointConfiguration,omitempty"`
	ProcessingConfiguration  *ProcessingConfiguration          `json:"ProcessingConfiguration,omitempty"`
	RequestConfiguration     *HTTPEndpointRequestConfiguration `json:"RequestConfiguration,omitempty"`
	RetryOptions             *HTTPEndpointRetryOptions         `json:"RetryOptions,omitempty"`
	RoleArn                  *string                           `json:"RoleARN,omitempty"`
	S3BackupMode             *HTTPEndpointS3BackupModeEnum     `json:"S3BackupMode,omitempty"`
	S3DestinationDescription *S3DestinationDescription         `json:"S3DestinationDescription,omitempty"`
}
