package shared

type ElasticsearchDestinationDescription struct {
	BufferingHints              *ElasticsearchBufferingHints          `json:"BufferingHints"`
	CloudWatchLoggingOptions    *CloudWatchLoggingOptions             `json:"CloudWatchLoggingOptions"`
	ClusterEndpoint             *string                               `json:"ClusterEndpoint"`
	DomainArn                   *string                               `json:"DomainARN"`
	IndexName                   *string                               `json:"IndexName"`
	IndexRotationPeriod         *ElasticsearchIndexRotationPeriodEnum `json:"IndexRotationPeriod"`
	ProcessingConfiguration     *ProcessingConfiguration              `json:"ProcessingConfiguration"`
	RetryOptions                *ElasticsearchRetryOptions            `json:"RetryOptions"`
	RoleArn                     *string                               `json:"RoleARN"`
	S3BackupMode                *ElasticsearchS3BackupModeEnum        `json:"S3BackupMode"`
	S3DestinationDescription    *S3DestinationDescription             `json:"S3DestinationDescription"`
	TypeName                    *string                               `json:"TypeName"`
	VpcConfigurationDescription *VpcConfigurationDescription          `json:"VpcConfigurationDescription"`
}
