package shared



type PutRecordBatchInput struct {
    DeliveryStreamName string `json:"DeliveryStreamName"`
    Records []Record `json:"Records"`
    
}

