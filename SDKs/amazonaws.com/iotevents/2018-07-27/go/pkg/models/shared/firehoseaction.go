package shared



type FirehoseAction struct {
    DeliveryStreamName string `json:"deliveryStreamName"`
    Payload *Payload `json:"payload,omitempty"`
    Separator *string `json:"separator,omitempty"`
    
}

