package shared

type Player struct {
	LatencyInMs      map[string]int64          `json:"LatencyInMs,omitempty"`
	PlayerAttributes map[string]AttributeValue `json:"PlayerAttributes,omitempty"`
	PlayerID         *string                   `json:"PlayerId,omitempty"`
	Team             *string                   `json:"Team,omitempty"`
}
