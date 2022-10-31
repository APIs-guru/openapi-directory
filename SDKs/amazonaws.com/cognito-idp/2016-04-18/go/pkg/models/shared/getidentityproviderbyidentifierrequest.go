package shared

type GetIdentityProviderByIdentifierRequest struct {
	IdpIdentifier string `json:"IdpIdentifier"`
	UserPoolID    string `json:"UserPoolId"`
}
