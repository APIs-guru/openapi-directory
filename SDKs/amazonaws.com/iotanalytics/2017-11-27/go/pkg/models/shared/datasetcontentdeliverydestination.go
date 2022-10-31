package shared



type DatasetContentDeliveryDestination struct {
    IotEventsDestinationConfiguration *IotEventsDestinationConfiguration `json:"iotEventsDestinationConfiguration,omitempty"`
    S3DestinationConfiguration *S3DestinationConfiguration `json:"s3DestinationConfiguration,omitempty"`
    
}

