package shared

type AuthenticationResultType struct {
	AccessToken       *string                `json:"AccessToken"`
	ExpiresIn         *int64                 `json:"ExpiresIn"`
	IDToken           *string                `json:"IdToken"`
	NewDeviceMetadata *NewDeviceMetadataType `json:"NewDeviceMetadata"`
	RefreshToken      *string                `json:"RefreshToken"`
	TokenType         *string                `json:"TokenType"`
}
