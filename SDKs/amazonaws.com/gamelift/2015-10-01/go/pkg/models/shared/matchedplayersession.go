package shared

type MatchedPlayerSession struct {
	PlayerID        *string `json:"PlayerId,omitempty"`
	PlayerSessionID *string `json:"PlayerSessionId,omitempty"`
}
