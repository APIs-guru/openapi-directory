package shared

type HTTPEndpointDestinationDescription struct {
	BufferingHints           *HTTPEndpointBufferingHints       `json:"BufferingHints"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions         `json:"CloudWatchLoggingOptions"`
	EndpointConfiguration    *HTTPEndpointDescription          `json:"EndpointConfiguration"`
	ProcessingConfiguration  *ProcessingConfiguration          `json:"ProcessingConfiguration"`
	RequestConfiguration     *HTTPEndpointRequestConfiguration `json:"RequestConfiguration"`
	RetryOptions             *HTTPEndpointRetryOptions         `json:"RetryOptions"`
	RoleArn                  *string                           `json:"RoleARN"`
	S3BackupMode             *HTTPEndpointS3BackupModeEnum     `json:"S3BackupMode"`
	S3DestinationDescription *S3DestinationDescription         `json:"S3DestinationDescription"`
}
