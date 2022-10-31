package shared



type DeleteDeliveryStreamInput struct {
    AllowForceDelete *bool `json:"AllowForceDelete,omitempty"`
    DeliveryStreamName string `json:"DeliveryStreamName"`
    
}

