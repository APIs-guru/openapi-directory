package shared

type NodegroupUpdateConfig struct {
	MaxUnavailable           *int64 `json:"maxUnavailable"`
	MaxUnavailablePercentage *int64 `json:"maxUnavailablePercentage"`
}
