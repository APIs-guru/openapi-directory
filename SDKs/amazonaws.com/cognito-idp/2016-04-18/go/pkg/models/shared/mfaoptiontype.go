package shared

type MfaOptionType struct {
	AttributeName  *string                 `json:"AttributeName"`
	DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium"`
}
