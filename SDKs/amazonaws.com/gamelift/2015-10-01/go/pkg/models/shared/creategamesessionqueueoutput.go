package shared

// CreateGameSessionQueueOutput
// Represents the returned data in response to a request operation.
type CreateGameSessionQueueOutput struct {
	GameSessionQueue *GameSessionQueue `json:"GameSessionQueue,omitempty"`
}
