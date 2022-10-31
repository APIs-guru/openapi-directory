package shared



type KafkaAction struct {
    ClientProperties map[string]string `json:"clientProperties"`
    DestinationArn string `json:"destinationArn"`
    Key *string `json:"key,omitempty"`
    Partition *string `json:"partition,omitempty"`
    Topic string `json:"topic"`
    
}

