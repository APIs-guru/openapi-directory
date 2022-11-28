package shared

// PendingModifiedValues
// A group of settings that are applied to the cluster in the future, or that are currently being applied.
type PendingModifiedValues struct {
	AuthTokenStatus           *AuthTokenUpdateStatusEnum
	CacheNodeIdsToRemove      []string
	CacheNodeType             *string
	EngineVersion             *string
	LogDeliveryConfigurations []PendingLogDeliveryConfiguration
	NumCacheNodes             *int64
}
