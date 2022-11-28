package shared

// GetContextKeysForPolicyResponse
// Contains the response to a successful <a>GetContextKeysForPrincipalPolicy</a> or <a>GetContextKeysForCustomPolicy</a> request.
type GetContextKeysForPolicyResponse struct {
	ContextKeyNames []string
}
