package shared

// CreateGameSessionOutput
// Represents the returned data in response to a request operation.
type CreateGameSessionOutput struct {
	GameSession *GameSession `json:"GameSession,omitempty"`
}
