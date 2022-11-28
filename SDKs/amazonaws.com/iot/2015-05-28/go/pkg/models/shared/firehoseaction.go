package shared

// FirehoseAction
// Describes an action that writes data to an Amazon Kinesis Firehose stream.
type FirehoseAction struct {
	BatchMode          *bool   `json:"batchMode,omitempty"`
	DeliveryStreamName string  `json:"deliveryStreamName"`
	RoleArn            string  `json:"roleArn"`
	Separator          *string `json:"separator,omitempty"`
}
