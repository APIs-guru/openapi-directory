package shared

type TagDeliveryStreamInput struct {
	DeliveryStreamName string `json:"DeliveryStreamName"`
	Tags               []Tag  `json:"Tags"`
}
