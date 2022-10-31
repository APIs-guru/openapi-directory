package shared



type CreateDeliveryStreamInput struct {
    DeliveryStreamEncryptionConfigurationInput *DeliveryStreamEncryptionConfigurationInput `json:"DeliveryStreamEncryptionConfigurationInput,omitempty"`
    DeliveryStreamName string `json:"DeliveryStreamName"`
    DeliveryStreamType *DeliveryStreamTypeEnum `json:"DeliveryStreamType,omitempty"`
    ElasticsearchDestinationConfiguration *ElasticsearchDestinationConfiguration `json:"ElasticsearchDestinationConfiguration,omitempty"`
    ExtendedS3DestinationConfiguration *ExtendedS3DestinationConfiguration `json:"ExtendedS3DestinationConfiguration,omitempty"`
    HTTPEndpointDestinationConfiguration *HTTPEndpointDestinationConfiguration `json:"HttpEndpointDestinationConfiguration,omitempty"`
    KinesisStreamSourceConfiguration *KinesisStreamSourceConfiguration `json:"KinesisStreamSourceConfiguration,omitempty"`
    RedshiftDestinationConfiguration *RedshiftDestinationConfiguration `json:"RedshiftDestinationConfiguration,omitempty"`
    S3DestinationConfiguration *S3DestinationConfiguration `json:"S3DestinationConfiguration,omitempty"`
    SplunkDestinationConfiguration *SplunkDestinationConfiguration `json:"SplunkDestinationConfiguration,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

