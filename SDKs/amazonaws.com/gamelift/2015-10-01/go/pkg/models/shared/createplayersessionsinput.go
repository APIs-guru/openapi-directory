package shared

// CreatePlayerSessionsInput
// Represents the input for a request operation.
type CreatePlayerSessionsInput struct {
	GameSessionID string            `json:"GameSessionId"`
	PlayerDataMap map[string]string `json:"PlayerDataMap,omitempty"`
	PlayerIds     []string          `json:"PlayerIds"`
}
