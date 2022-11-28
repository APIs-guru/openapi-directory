package shared

// MfaOptionType
//
//	<i>This data type is no longer supported.</i> You can use it only for SMS MFA configurations. You can't use it for TOTP software token MFA configurations.
type MfaOptionType struct {
	AttributeName  *string                 `json:"AttributeName,omitempty"`
	DeliveryMedium *DeliveryMediumTypeEnum `json:"DeliveryMedium,omitempty"`
}
