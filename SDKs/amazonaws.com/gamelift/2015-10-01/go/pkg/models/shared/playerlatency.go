package shared

// PlayerLatency
// Regional latency information for a player, used when requesting a new game session with <a>StartGameSessionPlacement</a>. This value indicates the amount of time lag that exists when the player is connected to a fleet in the specified Region. The relative difference between a player's latency values for multiple Regions are used to determine which fleets are best suited to place a new game session for the player.
type PlayerLatency struct {
	LatencyInMilliseconds *float32 `json:"LatencyInMilliseconds,omitempty"`
	PlayerID              *string  `json:"PlayerId,omitempty"`
	RegionIdentifier      *string  `json:"RegionIdentifier,omitempty"`
}
