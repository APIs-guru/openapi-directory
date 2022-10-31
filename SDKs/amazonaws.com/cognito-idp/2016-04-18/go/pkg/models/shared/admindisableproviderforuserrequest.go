package shared



type AdminDisableProviderForUserRequest struct {
    User ProviderUserIdentifierType `json:"User"`
    UserPoolID string `json:"UserPoolId"`
    
}

