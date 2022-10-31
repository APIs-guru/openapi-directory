package shared



type KinesisStreamingDestinationOutput struct {
    DestinationStatus *DestinationStatusEnum `json:"DestinationStatus,omitempty"`
    StreamArn *string `json:"StreamArn,omitempty"`
    TableName *string `json:"TableName,omitempty"`
    
}

