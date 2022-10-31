package shared



type TestInvokeAuthorizerResponse struct {
    DisconnectAfterInSeconds *int64 `json:"disconnectAfterInSeconds,omitempty"`
    IsAuthenticated *bool `json:"isAuthenticated,omitempty"`
    PolicyDocuments []string `json:"policyDocuments,omitempty"`
    PrincipalID *string `json:"principalId,omitempty"`
    RefreshAfterInSeconds *int64 `json:"refreshAfterInSeconds,omitempty"`
    
}

