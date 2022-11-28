package shared

// ArrayPropertiesSummary
// An object representing the array properties of a job.
type ArrayPropertiesSummary struct {
	Index *int64 `json:"index,omitempty"`
	Size  *int64 `json:"size,omitempty"`
}
