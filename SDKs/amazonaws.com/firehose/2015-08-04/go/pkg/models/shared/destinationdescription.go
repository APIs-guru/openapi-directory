package shared

type DestinationDescription struct {
	DestinationID                       string                               `json:"DestinationId"`
	ElasticsearchDestinationDescription *ElasticsearchDestinationDescription `json:"ElasticsearchDestinationDescription"`
	ExtendedS3DestinationDescription    *ExtendedS3DestinationDescription    `json:"ExtendedS3DestinationDescription"`
	HTTPEndpointDestinationDescription  *HTTPEndpointDestinationDescription  `json:"HttpEndpointDestinationDescription"`
	RedshiftDestinationDescription      *RedshiftDestinationDescription      `json:"RedshiftDestinationDescription"`
	S3DestinationDescription            *S3DestinationDescription            `json:"S3DestinationDescription"`
	SplunkDestinationDescription        *SplunkDestinationDescription        `json:"SplunkDestinationDescription"`
}
