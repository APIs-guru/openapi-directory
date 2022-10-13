package shared

type RespondToAuthChallengeResponse struct {
	AuthenticationResult *AuthenticationResultType `json:"AuthenticationResult"`
	ChallengeName        *ChallengeNameTypeEnum    `json:"ChallengeName"`
	ChallengeParameters  map[string]string         `json:"ChallengeParameters"`
	Session              *string                   `json:"Session"`
}
