package shared

type QueueResponseAmqp struct {
	QueueName *string `json:"queueName"`
	URI       *string `json:"uri"`
}

type QueueResponseMessages struct {
	Ready          *int64 `json:"ready"`
	Total          *int64 `json:"total"`
	Unacknowledged *int64 `json:"unacknowledged"`
}

type QueueResponseStats struct {
	AcknowledgementRate *float64 `json:"acknowledgementRate"`
	DeliveryRate        *float64 `json:"deliveryRate"`
	PublishRate         *float64 `json:"publishRate"`
}

type QueueResponseStomp struct {
	Destination *string `json:"destination"`
	Host        *string `json:"host"`
	URI         *string `json:"uri"`
}

type QueueResponse struct {
	Amqp         *QueueResponseAmqp     `json:"amqp"`
	AppID        *string                `json:"appId"`
	Deadletter   *bool                  `json:"deadletter"`
	DeadletterID *string                `json:"deadletterId"`
	ID           *string                `json:"id"`
	MaxLength    *int64                 `json:"maxLength"`
	Messages     *QueueResponseMessages `json:"messages"`
	Name         *string                `json:"name"`
	Region       *string                `json:"region"`
	State        *string                `json:"state"`
	Stats        *QueueResponseStats    `json:"stats"`
	Stomp        *QueueResponseStomp    `json:"stomp"`
	TTL          *int64                 `json:"ttl"`
}
