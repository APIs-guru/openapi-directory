package shared

type CreateDeliveryStreamInput struct {
	DeliveryStreamEncryptionConfigurationInput *DeliveryStreamEncryptionConfigurationInput `json:"DeliveryStreamEncryptionConfigurationInput"`
	DeliveryStreamName                         string                                      `json:"DeliveryStreamName"`
	DeliveryStreamType                         *DeliveryStreamTypeEnum                     `json:"DeliveryStreamType"`
	ElasticsearchDestinationConfiguration      *ElasticsearchDestinationConfiguration      `json:"ElasticsearchDestinationConfiguration"`
	ExtendedS3DestinationConfiguration         *ExtendedS3DestinationConfiguration         `json:"ExtendedS3DestinationConfiguration"`
	HTTPEndpointDestinationConfiguration       *HTTPEndpointDestinationConfiguration       `json:"HttpEndpointDestinationConfiguration"`
	KinesisStreamSourceConfiguration           *KinesisStreamSourceConfiguration           `json:"KinesisStreamSourceConfiguration"`
	RedshiftDestinationConfiguration           *RedshiftDestinationConfiguration           `json:"RedshiftDestinationConfiguration"`
	S3DestinationConfiguration                 *S3DestinationConfiguration                 `json:"S3DestinationConfiguration"`
	SplunkDestinationConfiguration             *SplunkDestinationConfiguration             `json:"SplunkDestinationConfiguration"`
	Tags                                       []Tag                                       `json:"Tags"`
}
