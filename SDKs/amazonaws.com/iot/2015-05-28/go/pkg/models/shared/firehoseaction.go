package shared



type FirehoseAction struct {
    BatchMode *bool `json:"batchMode,omitempty"`
    DeliveryStreamName string `json:"deliveryStreamName"`
    RoleArn string `json:"roleArn"`
    Separator *string `json:"separator,omitempty"`
    
}

