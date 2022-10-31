package shared



type QueueResponseAmqp struct {
    QueueName *string `json:"queueName,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type QueueResponseMessages struct {
    Ready *int64 `json:"ready,omitempty"`
    Total *int64 `json:"total,omitempty"`
    Unacknowledged *int64 `json:"unacknowledged,omitempty"`
    
}

type QueueResponseStats struct {
    AcknowledgementRate *float64 `json:"acknowledgementRate,omitempty"`
    DeliveryRate *float64 `json:"deliveryRate,omitempty"`
    PublishRate *float64 `json:"publishRate,omitempty"`
    
}

type QueueResponseStomp struct {
    Destination *string `json:"destination,omitempty"`
    Host *string `json:"host,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

type QueueResponse struct {
    Amqp *QueueResponseAmqp `json:"amqp,omitempty"`
    AppID *string `json:"appId,omitempty"`
    Deadletter *bool `json:"deadletter,omitempty"`
    DeadletterID *string `json:"deadletterId,omitempty"`
    ID *string `json:"id,omitempty"`
    MaxLength *int64 `json:"maxLength,omitempty"`
    Messages *QueueResponseMessages `json:"messages,omitempty"`
    Name *string `json:"name,omitempty"`
    Region *string `json:"region,omitempty"`
    State *string `json:"state,omitempty"`
    Stats *QueueResponseStats `json:"stats,omitempty"`
    Stomp *QueueResponseStomp `json:"stomp,omitempty"`
    TTL *int64 `json:"ttl,omitempty"`
    
}

