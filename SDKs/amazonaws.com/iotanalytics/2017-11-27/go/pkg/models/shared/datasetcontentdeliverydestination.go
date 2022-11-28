package shared

// DatasetContentDeliveryDestination
// The destination to which dataset contents are delivered.
type DatasetContentDeliveryDestination struct {
	IotEventsDestinationConfiguration *IotEventsDestinationConfiguration `json:"iotEventsDestinationConfiguration,omitempty"`
	S3DestinationConfiguration        *S3DestinationConfiguration        `json:"s3DestinationConfiguration,omitempty"`
}
