package shared



type AdminCreateUserRequest struct {
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    DesiredDeliveryMediums []DeliveryMediumTypeEnum `json:"DesiredDeliveryMediums,omitempty"`
    ForceAliasCreation *bool `json:"ForceAliasCreation,omitempty"`
    MessageAction *MessageActionTypeEnum `json:"MessageAction,omitempty"`
    TemporaryPassword *string `json:"TemporaryPassword,omitempty"`
    UserAttributes []AttributeType `json:"UserAttributes,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    Username string `json:"Username"`
    ValidationData []AttributeType `json:"ValidationData,omitempty"`
    
}

