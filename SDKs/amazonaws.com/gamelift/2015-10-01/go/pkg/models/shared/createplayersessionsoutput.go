package shared

// CreatePlayerSessionsOutput
// Represents the returned data in response to a request operation.
type CreatePlayerSessionsOutput struct {
	PlayerSessions []PlayerSession `json:"PlayerSessions,omitempty"`
}
