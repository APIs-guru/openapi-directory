package shared

// FirehoseAction
// Sends information about the detector model instance and the event that triggered the action to an Amazon Kinesis Data Firehose delivery stream.
type FirehoseAction struct {
	DeliveryStreamName string   `json:"deliveryStreamName"`
	Payload            *Payload `json:"payload,omitempty"`
	Separator          *string  `json:"separator,omitempty"`
}
