package shared

// BuildBatchFilter
// Specifies filters when retrieving batch builds.
type BuildBatchFilter struct {
	Status *StatusTypeEnum `json:"status,omitempty"`
}
