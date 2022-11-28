package shared

// DestinationDescription
// Describes the destination for a delivery stream.
type DestinationDescription struct {
	DestinationID                       string                               `json:"DestinationId"`
	ElasticsearchDestinationDescription *ElasticsearchDestinationDescription `json:"ElasticsearchDestinationDescription,omitempty"`
	ExtendedS3DestinationDescription    *ExtendedS3DestinationDescription    `json:"ExtendedS3DestinationDescription,omitempty"`
	HTTPEndpointDestinationDescription  *HTTPEndpointDestinationDescription  `json:"HttpEndpointDestinationDescription,omitempty"`
	RedshiftDestinationDescription      *RedshiftDestinationDescription      `json:"RedshiftDestinationDescription,omitempty"`
	S3DestinationDescription            *S3DestinationDescription            `json:"S3DestinationDescription,omitempty"`
	SplunkDestinationDescription        *SplunkDestinationDescription        `json:"SplunkDestinationDescription,omitempty"`
}
