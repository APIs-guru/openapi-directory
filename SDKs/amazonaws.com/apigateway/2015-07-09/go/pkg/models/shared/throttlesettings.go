package shared

// ThrottleSettings
//
//	The API request rate limits.
type ThrottleSettings struct {
	BurstLimit *int64   `json:"burstLimit,omitempty"`
	RateLimit  *float64 `json:"rateLimit,omitempty"`
}
