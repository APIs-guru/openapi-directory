package shared

type ListTagsForDeliveryStreamInput struct {
	DeliveryStreamName   string  `json:"DeliveryStreamName"`
	ExclusiveStartTagKey *string `json:"ExclusiveStartTagKey"`
	Limit                *int64  `json:"Limit"`
}
