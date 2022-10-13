package shared

type ElasticsearchDestinationUpdate struct {
	BufferingHints           *ElasticsearchBufferingHints          `json:"BufferingHints"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions             `json:"CloudWatchLoggingOptions"`
	ClusterEndpoint          *string                               `json:"ClusterEndpoint"`
	DomainArn                *string                               `json:"DomainARN"`
	IndexName                *string                               `json:"IndexName"`
	IndexRotationPeriod      *ElasticsearchIndexRotationPeriodEnum `json:"IndexRotationPeriod"`
	ProcessingConfiguration  *ProcessingConfiguration              `json:"ProcessingConfiguration"`
	RetryOptions             *ElasticsearchRetryOptions            `json:"RetryOptions"`
	RoleArn                  *string                               `json:"RoleARN"`
	S3Update                 *S3DestinationUpdate                  `json:"S3Update"`
	TypeName                 *string                               `json:"TypeName"`
}
