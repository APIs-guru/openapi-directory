package shared

type ListDeliveryStreamsInput struct {
	DeliveryStreamType               *DeliveryStreamTypeEnum `json:"DeliveryStreamType"`
	ExclusiveStartDeliveryStreamName *string                 `json:"ExclusiveStartDeliveryStreamName"`
	Limit                            *int64                  `json:"Limit"`
}
