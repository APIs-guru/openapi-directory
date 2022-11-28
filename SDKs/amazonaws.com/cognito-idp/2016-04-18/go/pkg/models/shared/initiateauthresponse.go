package shared

// InitiateAuthResponse
// Initiates the authentication response.
type InitiateAuthResponse struct {
	AuthenticationResult *AuthenticationResultType `json:"AuthenticationResult,omitempty"`
	ChallengeName        *ChallengeNameTypeEnum    `json:"ChallengeName,omitempty"`
	ChallengeParameters  map[string]string         `json:"ChallengeParameters,omitempty"`
	Session              *string                   `json:"Session,omitempty"`
}
