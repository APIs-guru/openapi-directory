package shared

// FederatedAuthentication
// Describes the IAM SAML identity providers used for federated authentication.
type FederatedAuthentication struct {
	SamlProviderArn            *string
	SelfServiceSamlProviderArn *string
}
