package shared

// DomainStats
// Usage-specific statistics about the domain.
type DomainStats struct {
	MeteringProfileCount *int64 `json:"MeteringProfileCount,omitempty"`
	ObjectCount          *int64 `json:"ObjectCount,omitempty"`
	ProfileCount         *int64 `json:"ProfileCount,omitempty"`
	TotalSize            *int64 `json:"TotalSize,omitempty"`
}
