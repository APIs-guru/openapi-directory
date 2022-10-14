package shared

type PlacedPlayerSession struct {
	PlayerID        *string `json:"PlayerId,omitempty"`
	PlayerSessionID *string `json:"PlayerSessionId,omitempty"`
}
