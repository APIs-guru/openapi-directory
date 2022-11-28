package shared

// CreatePlayerSessionOutput
// Represents the returned data in response to a request operation.
type CreatePlayerSessionOutput struct {
	PlayerSession *PlayerSession `json:"PlayerSession,omitempty"`
}
