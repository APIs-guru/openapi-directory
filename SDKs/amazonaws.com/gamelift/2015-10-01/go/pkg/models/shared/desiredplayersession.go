package shared

// DesiredPlayerSession
// Player information for use when creating player sessions using a game session placement request with <a>StartGameSessionPlacement</a>.
type DesiredPlayerSession struct {
	PlayerData *string `json:"PlayerData,omitempty"`
	PlayerID   *string `json:"PlayerId,omitempty"`
}
