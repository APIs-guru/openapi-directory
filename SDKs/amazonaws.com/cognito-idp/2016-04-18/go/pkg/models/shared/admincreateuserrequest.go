package shared

type AdminCreateUserRequest struct {
	ClientMetadata         map[string]string        `json:"ClientMetadata"`
	DesiredDeliveryMediums []DeliveryMediumTypeEnum `json:"DesiredDeliveryMediums"`
	ForceAliasCreation     *bool                    `json:"ForceAliasCreation"`
	MessageAction          *MessageActionTypeEnum   `json:"MessageAction"`
	TemporaryPassword      *string                  `json:"TemporaryPassword"`
	UserAttributes         []AttributeType          `json:"UserAttributes"`
	UserPoolID             string                   `json:"UserPoolId"`
	Username               string                   `json:"Username"`
	ValidationData         []AttributeType          `json:"ValidationData"`
}
