package shared

type KinesisStreamingDestinationOutput struct {
	DestinationStatus *DestinationStatusEnum `json:"DestinationStatus"`
	StreamArn         *string                `json:"StreamArn"`
	TableName         *string                `json:"TableName"`
}
