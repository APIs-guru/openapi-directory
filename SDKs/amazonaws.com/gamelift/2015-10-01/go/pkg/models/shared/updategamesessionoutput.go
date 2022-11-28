package shared

// UpdateGameSessionOutput
// Represents the returned data in response to a request operation.
type UpdateGameSessionOutput struct {
	GameSession *GameSession `json:"GameSession,omitempty"`
}
