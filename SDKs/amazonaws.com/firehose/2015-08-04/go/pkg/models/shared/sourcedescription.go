package shared

// SourceDescription
// Details about a Kinesis data stream used as the source for a Kinesis Data Firehose delivery stream.
type SourceDescription struct {
	KinesisStreamSourceDescription *KinesisStreamSourceDescription `json:"KinesisStreamSourceDescription,omitempty"`
}
