package shared

type ElasticsearchDestinationDescription struct {
	BufferingHints              *ElasticsearchBufferingHints          `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions    *CloudWatchLoggingOptions             `json:"CloudWatchLoggingOptions,omitempty"`
	ClusterEndpoint             *string                               `json:"ClusterEndpoint,omitempty"`
	DomainArn                   *string                               `json:"DomainARN,omitempty"`
	IndexName                   *string                               `json:"IndexName,omitempty"`
	IndexRotationPeriod         *ElasticsearchIndexRotationPeriodEnum `json:"IndexRotationPeriod,omitempty"`
	ProcessingConfiguration     *ProcessingConfiguration              `json:"ProcessingConfiguration,omitempty"`
	RetryOptions                *ElasticsearchRetryOptions            `json:"RetryOptions,omitempty"`
	RoleArn                     *string                               `json:"RoleARN,omitempty"`
	S3BackupMode                *ElasticsearchS3BackupModeEnum        `json:"S3BackupMode,omitempty"`
	S3DestinationDescription    *S3DestinationDescription             `json:"S3DestinationDescription,omitempty"`
	TypeName                    *string                               `json:"TypeName,omitempty"`
	VpcConfigurationDescription *VpcConfigurationDescription          `json:"VpcConfigurationDescription,omitempty"`
}
