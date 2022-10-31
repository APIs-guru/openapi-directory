package shared



type AuthenticationResultType struct {
    AccessToken *string `json:"AccessToken,omitempty"`
    ExpiresIn *int64 `json:"ExpiresIn,omitempty"`
    IDToken *string `json:"IdToken,omitempty"`
    NewDeviceMetadata *NewDeviceMetadataType `json:"NewDeviceMetadata,omitempty"`
    RefreshToken *string `json:"RefreshToken,omitempty"`
    TokenType *string `json:"TokenType,omitempty"`
    
}

