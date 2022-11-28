package shared

// StopGameSessionPlacementOutput
// Represents the returned data in response to a request operation.
type StopGameSessionPlacementOutput struct {
	GameSessionPlacement *GameSessionPlacement `json:"GameSessionPlacement,omitempty"`
}
