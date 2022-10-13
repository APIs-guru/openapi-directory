package shared

type TestInvokeAuthorizerResponse struct {
	DisconnectAfterInSeconds *int64   `json:"disconnectAfterInSeconds"`
	IsAuthenticated          *bool    `json:"isAuthenticated"`
	PolicyDocuments          []string `json:"policyDocuments"`
	PrincipalID              *string  `json:"principalId"`
	RefreshAfterInSeconds    *int64   `json:"refreshAfterInSeconds"`
}
