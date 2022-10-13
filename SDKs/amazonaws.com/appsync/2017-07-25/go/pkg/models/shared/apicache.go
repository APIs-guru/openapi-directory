package shared

type APICache struct {
	APICachingBehavior       *APICachingBehaviorEnum `json:"apiCachingBehavior"`
	AtRestEncryptionEnabled  *bool                   `json:"atRestEncryptionEnabled"`
	Status                   *APICacheStatusEnum     `json:"status"`
	TransitEncryptionEnabled *bool                   `json:"transitEncryptionEnabled"`
	TTL                      *int64                  `json:"ttl"`
	Type                     *APICacheTypeEnum       `json:"type"`
}
