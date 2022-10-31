package shared



type UpdateDestinationInput struct {
    CurrentDeliveryStreamVersionID string `json:"CurrentDeliveryStreamVersionId"`
    DeliveryStreamName string `json:"DeliveryStreamName"`
    DestinationID string `json:"DestinationId"`
    ElasticsearchDestinationUpdate *ElasticsearchDestinationUpdate `json:"ElasticsearchDestinationUpdate,omitempty"`
    ExtendedS3DestinationUpdate *ExtendedS3DestinationUpdate `json:"ExtendedS3DestinationUpdate,omitempty"`
    HTTPEndpointDestinationUpdate *HTTPEndpointDestinationUpdate `json:"HttpEndpointDestinationUpdate,omitempty"`
    RedshiftDestinationUpdate *RedshiftDestinationUpdate `json:"RedshiftDestinationUpdate,omitempty"`
    S3DestinationUpdate *S3DestinationUpdate `json:"S3DestinationUpdate,omitempty"`
    SplunkDestinationUpdate *SplunkDestinationUpdate `json:"SplunkDestinationUpdate,omitempty"`
    
}

