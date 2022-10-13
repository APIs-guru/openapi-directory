package shared

type KafkaAction struct {
	ClientProperties map[string]string `json:"clientProperties"`
	DestinationArn   string            `json:"destinationArn"`
	Key              *string           `json:"key"`
	Partition        *string           `json:"partition"`
	Topic            string            `json:"topic"`
}
