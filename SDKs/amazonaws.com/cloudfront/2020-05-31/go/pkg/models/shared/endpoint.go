package shared

// EndPoint
// Contains information about the Amazon Kinesis data stream where you are sending real-time log data in a real-time log configuration.
type EndPoint struct {
	KinesisStreamConfig *KinesisStreamConfig
	StreamType          string
}
