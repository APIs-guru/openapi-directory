package shared

type MfaOptionType struct {
	AttributeName  *string                 `json:"AttributeName,omitempty"`
	DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium,omitempty"`
}
