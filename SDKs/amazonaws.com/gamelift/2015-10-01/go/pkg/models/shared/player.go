package shared

// Player
// Represents a player in matchmaking. When starting a matchmaking request, a player has a player ID, attributes, and may have latency data. Team information is added after a match has been successfully completed.
type Player struct {
	LatencyInMs      map[string]int64          `json:"LatencyInMs,omitempty"`
	PlayerAttributes map[string]AttributeValue `json:"PlayerAttributes,omitempty"`
	PlayerID         *string                   `json:"PlayerId,omitempty"`
	Team             *string                   `json:"Team,omitempty"`
}
