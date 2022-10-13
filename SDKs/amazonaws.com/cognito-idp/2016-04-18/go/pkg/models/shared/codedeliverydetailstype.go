package shared

type CodeDeliveryDetailsType struct {
	AttributeName  *string                 `json:"AttributeName"`
	DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium"`
	Destination    *string                 `json:"Destination"`
}
