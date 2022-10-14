package shared

type AdminRespondToAuthChallengeResponse struct {
	AuthenticationResult *AuthenticationResultType `json:"AuthenticationResult,omitempty"`
	ChallengeName        *ChallengeNameTypeEnum    `json:"ChallengeName,omitempty"`
	ChallengeParameters  map[string]string         `json:"ChallengeParameters,omitempty"`
	Session              *string                   `json:"Session,omitempty"`
}
