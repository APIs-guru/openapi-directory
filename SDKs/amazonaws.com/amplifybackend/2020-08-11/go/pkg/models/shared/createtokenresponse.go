package shared

type CreateTokenResponse struct {
	AppID         *string `json:"AppId,omitempty"`
	ChallengeCode *string `json:"ChallengeCode,omitempty"`
	SessionID     *string `json:"SessionId,omitempty"`
	TTL           *string `json:"Ttl,omitempty"`
}
