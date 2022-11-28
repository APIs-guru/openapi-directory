package shared

// ArrayPropertiesDetail
// An object representing the array properties of a job.
type ArrayPropertiesDetail struct {
	Index         *int64           `json:"index,omitempty"`
	Size          *int64           `json:"size,omitempty"`
	StatusSummary map[string]int64 `json:"statusSummary,omitempty"`
}
