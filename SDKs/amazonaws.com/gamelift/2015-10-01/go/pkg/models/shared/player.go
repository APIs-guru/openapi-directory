package shared

type Player struct {
	LatencyInMs      map[string]int64          `json:"LatencyInMs"`
	PlayerAttributes map[string]AttributeValue `json:"PlayerAttributes"`
	PlayerID         *string                   `json:"PlayerId"`
	Team             *string                   `json:"Team"`
}
