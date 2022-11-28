package shared

// KafkaAction
// Send messages to an Amazon Managed Streaming for Apache Kafka (Amazon MSK) or self-managed Apache Kafka cluster.
type KafkaAction struct {
	ClientProperties map[string]string `json:"clientProperties"`
	DestinationArn   string            `json:"destinationArn"`
	Key              *string           `json:"key,omitempty"`
	Partition        *string           `json:"partition,omitempty"`
	Topic            string            `json:"topic"`
}
