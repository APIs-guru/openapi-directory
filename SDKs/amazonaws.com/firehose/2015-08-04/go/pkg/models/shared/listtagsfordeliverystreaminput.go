package shared



type ListTagsForDeliveryStreamInput struct {
    DeliveryStreamName string `json:"DeliveryStreamName"`
    ExclusiveStartTagKey *string `json:"ExclusiveStartTagKey,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    
}

