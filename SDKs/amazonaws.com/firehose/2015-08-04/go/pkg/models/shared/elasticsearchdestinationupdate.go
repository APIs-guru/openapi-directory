package shared

// ElasticsearchDestinationUpdate
// Describes an update for a destination in Amazon ES.
type ElasticsearchDestinationUpdate struct {
	BufferingHints           *ElasticsearchBufferingHints          `json:"BufferingHints,omitempty"`
	CloudWatchLoggingOptions *CloudWatchLoggingOptions             `json:"CloudWatchLoggingOptions,omitempty"`
	ClusterEndpoint          *string                               `json:"ClusterEndpoint,omitempty"`
	DomainArn                *string                               `json:"DomainARN,omitempty"`
	IndexName                *string                               `json:"IndexName,omitempty"`
	IndexRotationPeriod      *ElasticsearchIndexRotationPeriodEnum `json:"IndexRotationPeriod,omitempty"`
	ProcessingConfiguration  *ProcessingConfiguration              `json:"ProcessingConfiguration,omitempty"`
	RetryOptions             *ElasticsearchRetryOptions            `json:"RetryOptions,omitempty"`
	RoleArn                  *string                               `json:"RoleARN,omitempty"`
	S3Update                 *S3DestinationUpdate                  `json:"S3Update,omitempty"`
	TypeName                 *string                               `json:"TypeName,omitempty"`
}
