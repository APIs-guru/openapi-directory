package shared

// QueryFilter
// Information that is used to filter message data, to segregate it according to the timeframe in which it arrives.
type QueryFilter struct {
	DeltaTime *DeltaTime `json:"deltaTime,omitempty"`
}
