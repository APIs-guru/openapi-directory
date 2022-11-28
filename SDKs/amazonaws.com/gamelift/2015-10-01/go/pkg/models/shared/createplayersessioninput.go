package shared

// CreatePlayerSessionInput
// Represents the input for a request operation.
type CreatePlayerSessionInput struct {
	GameSessionID string  `json:"GameSessionId"`
	PlayerData    *string `json:"PlayerData,omitempty"`
	PlayerID      string  `json:"PlayerId"`
}
