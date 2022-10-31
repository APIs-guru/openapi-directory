package shared



type UpdateUserAttributesRequest struct {
    AccessToken string `json:"AccessToken"`
    ClientMetadata map[string]string `json:"ClientMetadata,omitempty"`
    UserAttributes []AttributeType `json:"UserAttributes"`
    
}

