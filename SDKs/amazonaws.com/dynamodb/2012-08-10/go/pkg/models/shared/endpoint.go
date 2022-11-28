package shared

// Endpoint
// An endpoint information details.
type Endpoint struct {
	Address              string `json:"Address"`
	CachePeriodInMinutes int64  `json:"CachePeriodInMinutes"`
}
