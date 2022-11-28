package shared

// KinesisDataStreamDestination
// Describes a Kinesis data stream destination.
type KinesisDataStreamDestination struct {
	DestinationStatus            *DestinationStatusEnum `json:"DestinationStatus,omitempty"`
	DestinationStatusDescription *string                `json:"DestinationStatusDescription,omitempty"`
	StreamArn                    *string                `json:"StreamArn,omitempty"`
}
