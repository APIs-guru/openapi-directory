package shared

type ElasticsearchDestinationConfiguration struct {
	BufferingHints           *ElasticsearchBufferingHints          `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions             `json:"CloudWatchLoggingOptions,omitempty"`
	ClusterEndpoint          *string                               `json:"ClusterEndpoint,omitempty"`
	DomainArn                *string                               `json:"DomainARN,omitempty"`
	IndexName                string                                `json:"IndexName"`
	IndexRotationPeriod      *ElasticsearchIndexRotationPeriodEnum `json:"IndexRotationPeriod,omitempty"`
	ProcessingConfiguration  *ProcessingConfiguration              `json:"ProcessingConfiguration,omitempty"`
	RetryOptions             *ElasticsearchRetryOptions            `json:"RetryOptions,omitempty"`
	RoleArn                  string                                `json:"RoleARN"`
	S3BackupMode             *ElasticsearchS3BackupModeEnum        `json:"S3BackupMode,omitempty"`
	S3Configuration          S3DestinationConfiguration            `json:"S3Configuration"`
	TypeName                 *string                               `json:"TypeName,omitempty"`
	VpcConfiguration         *VpcConfiguration                     `json:"VpcConfiguration,omitempty"`
}
