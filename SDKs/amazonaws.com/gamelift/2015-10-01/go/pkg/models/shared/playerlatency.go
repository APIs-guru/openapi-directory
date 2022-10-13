package shared

type PlayerLatency struct {
	LatencyInMilliseconds *float32 `json:"LatencyInMilliseconds"`
	PlayerID              *string  `json:"PlayerId"`
	RegionIdentifier      *string  `json:"RegionIdentifier"`
}
