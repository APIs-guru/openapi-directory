package shared

type HTTPEndpointDestinationUpdate struct {
	BufferingHints           *HTTPEndpointBufferingHints       `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions         `json:"CloudWatchLoggingOptions,omitempty"`
	EndpointConfiguration    *HTTPEndpointConfiguration        `json:"EndpointConfiguration,omitempty"`
	ProcessingConfiguration  *ProcessingConfiguration          `json:"ProcessingConfiguration,omitempty"`
	RequestConfiguration     *HTTPEndpointRequestConfiguration `json:"RequestConfiguration,omitempty"`
	RetryOptions             *HTTPEndpointRetryOptions         `json:"RetryOptions,omitempty"`
	RoleArn                  *string                           `json:"RoleARN,omitempty"`
	S3BackupMode             *HTTPEndpointS3BackupModeEnum     `json:"S3BackupMode,omitempty"`
	S3Update                 *S3DestinationUpdate              `json:"S3Update,omitempty"`
}
