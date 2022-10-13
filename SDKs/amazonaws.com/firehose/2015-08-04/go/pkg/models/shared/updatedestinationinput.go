package shared

type UpdateDestinationInput struct {
	CurrentDeliveryStreamVersionID string                          `json:"CurrentDeliveryStreamVersionId"`
	DeliveryStreamName             string                          `json:"DeliveryStreamName"`
	DestinationID                  string                          `json:"DestinationId"`
	ElasticsearchDestinationUpdate *ElasticsearchDestinationUpdate `json:"ElasticsearchDestinationUpdate"`
	ExtendedS3DestinationUpdate    *ExtendedS3DestinationUpdate    `json:"ExtendedS3DestinationUpdate"`
	HTTPEndpointDestinationUpdate  *HTTPEndpointDestinationUpdate  `json:"HttpEndpointDestinationUpdate"`
	RedshiftDestinationUpdate      *RedshiftDestinationUpdate      `json:"RedshiftDestinationUpdate"`
	S3DestinationUpdate            *S3DestinationUpdate            `json:"S3DestinationUpdate"`
	SplunkDestinationUpdate        *SplunkDestinationUpdate        `json:"SplunkDestinationUpdate"`
}
