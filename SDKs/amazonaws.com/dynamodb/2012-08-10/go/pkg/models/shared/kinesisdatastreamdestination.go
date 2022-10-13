package shared

type KinesisDataStreamDestination struct {
	DestinationStatus            *DestinationStatusEnum `json:"DestinationStatus"`
	DestinationStatusDescription *string                `json:"DestinationStatusDescription"`
	StreamArn                    *string                `json:"StreamArn"`
}
