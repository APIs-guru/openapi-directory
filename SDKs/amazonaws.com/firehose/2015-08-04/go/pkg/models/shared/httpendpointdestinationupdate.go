package shared

type HTTPEndpointDestinationUpdate struct {
	BufferingHints           *HTTPEndpointBufferingHints       `json:"BufferingHints"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions         `json:"CloudWatchLoggingOptions"`
	EndpointConfiguration    *HTTPEndpointConfiguration        `json:"EndpointConfiguration"`
	ProcessingConfiguration  *ProcessingConfiguration          `json:"ProcessingConfiguration"`
	RequestConfiguration     *HTTPEndpointRequestConfiguration `json:"RequestConfiguration"`
	RetryOptions             *HTTPEndpointRetryOptions         `json:"RetryOptions"`
	RoleArn                  *string                           `json:"RoleARN"`
	S3BackupMode             *HTTPEndpointS3BackupModeEnum     `json:"S3BackupMode"`
	S3Update                 *S3DestinationUpdate              `json:"S3Update"`
}
