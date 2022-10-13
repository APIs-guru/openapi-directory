package shared

type CreatePlayerSessionInput struct {
	GameSessionID string  `json:"GameSessionId"`
	PlayerData    *string `json:"PlayerData"`
	PlayerID      string  `json:"PlayerId"`
}
