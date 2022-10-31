package shared

type CachingConfig struct {
	CachingKeys []string `json:"cachingKeys,omitempty"`
	TTL         *int64   `json:"ttl,omitempty"`
}
