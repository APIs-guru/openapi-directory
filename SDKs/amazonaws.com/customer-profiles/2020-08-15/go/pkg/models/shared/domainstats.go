package shared

type DomainStats struct {
	MeteringProfileCount *int64 `json:"MeteringProfileCount"`
	ObjectCount          *int64 `json:"ObjectCount"`
	ProfileCount         *int64 `json:"ProfileCount"`
	TotalSize            *int64 `json:"TotalSize"`
}
