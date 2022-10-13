package shared

type CachingConfig struct {
	CachingKeys []string `json:"cachingKeys"`
	TTL         *int64   `json:"ttl"`
}
