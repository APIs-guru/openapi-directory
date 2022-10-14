package shared

type CreatePlayerSessionsInput struct {
	GameSessionID string            `json:"GameSessionId"`
	PlayerDataMap map[string]string `json:"PlayerDataMap,omitempty"`
	PlayerIds     []string          `json:"PlayerIds"`
}
