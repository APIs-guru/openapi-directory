package shared

type NodegroupUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable,omitempty"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage,omitempty"`
}
