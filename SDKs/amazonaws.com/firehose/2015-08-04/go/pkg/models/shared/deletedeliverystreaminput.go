package shared

type DeleteDeliveryStreamInput struct {
	AllowForceDelete   *bool  `json:"AllowForceDelete"`
	DeliveryStreamName string `json:"DeliveryStreamName"`
}
