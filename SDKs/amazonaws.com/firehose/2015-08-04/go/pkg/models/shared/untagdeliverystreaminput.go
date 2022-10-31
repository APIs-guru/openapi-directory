package shared



type UntagDeliveryStreamInput struct {
    DeliveryStreamName string `json:"DeliveryStreamName"`
    TagKeys []string `json:"TagKeys"`
    
}

