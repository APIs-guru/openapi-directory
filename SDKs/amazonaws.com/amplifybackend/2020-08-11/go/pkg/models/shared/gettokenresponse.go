package shared

type GetTokenResponse struct {
	AppID         *string `json:"AppId"`
	ChallengeCode *string `json:"ChallengeCode"`
	SessionID     *string `json:"SessionId"`
	TTL           *string `json:"Ttl"`
}
