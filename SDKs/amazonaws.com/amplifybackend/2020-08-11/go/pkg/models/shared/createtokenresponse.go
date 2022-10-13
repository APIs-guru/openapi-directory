package shared

type CreateTokenResponse struct {
	AppID         *string `json:"AppId"`
	ChallengeCode *string `json:"ChallengeCode"`
	SessionID     *string `json:"SessionId"`
	TTL           *string `json:"Ttl"`
}
