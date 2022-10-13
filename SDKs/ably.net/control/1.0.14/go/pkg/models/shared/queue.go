package shared

type Queue struct {
	MaxLength int64  `json:"maxLength"`
	Name      string `json:"name"`
	Region    string `json:"region"`
	TTL       int64  `json:"ttl"`
}
