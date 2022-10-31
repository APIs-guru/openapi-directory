package shared



type KinesisDataStreamDestination struct {
    DestinationStatus *DestinationStatusEnum `json:"DestinationStatus,omitempty"`
    DestinationStatusDescription *string `json:"DestinationStatusDescription,omitempty"`
    StreamArn *string `json:"StreamArn,omitempty"`
    
}

