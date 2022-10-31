package shared



type PutRecordInput struct {
    DeliveryStreamName string `json:"DeliveryStreamName"`
    Record Record `json:"Record"`
    
}

