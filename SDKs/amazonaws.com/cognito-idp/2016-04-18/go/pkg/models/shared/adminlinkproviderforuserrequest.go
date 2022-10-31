package shared



type AdminLinkProviderForUserRequest struct {
    DestinationUser ProviderUserIdentifierType `json:"DestinationUser"`
    SourceUser ProviderUserIdentifierType `json:"SourceUser"`
    UserPoolID string `json:"UserPoolId"`
    
}

