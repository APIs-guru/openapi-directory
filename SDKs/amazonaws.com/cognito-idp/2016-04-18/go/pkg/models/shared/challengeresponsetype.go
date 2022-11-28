package shared

// ChallengeResponseType
// The challenge response type.
type ChallengeResponseType struct {
	ChallengeName     *ChallengeNameEnum     `json:"ChallengeName,omitempty"`
	ChallengeResponse *ChallengeResponseEnum `json:"ChallengeResponse,omitempty"`
}
