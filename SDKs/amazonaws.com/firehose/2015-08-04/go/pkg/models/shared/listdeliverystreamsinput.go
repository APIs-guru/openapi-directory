package shared



type ListDeliveryStreamsInput struct {
    DeliveryStreamType *DeliveryStreamTypeEnum `json:"DeliveryStreamType,omitempty"`
    ExclusiveStartDeliveryStreamName *string `json:"ExclusiveStartDeliveryStreamName,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    
}

