package shared

// CachingConfig
// The caching configuration for a resolver that has caching enabled.
type CachingConfig struct {
	CachingKeys []string `json:"cachingKeys,omitempty"`
	TTL         *int64   `json:"ttl,omitempty"`
}
