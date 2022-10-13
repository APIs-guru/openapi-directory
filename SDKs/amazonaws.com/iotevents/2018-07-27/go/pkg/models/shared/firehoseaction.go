package shared

type FirehoseAction struct {
	DeliveryStreamName string   `json:"deliveryStreamName"`
	Payload            *Payload `json:"payload"`
	Separator          *string  `json:"separator"`
}
