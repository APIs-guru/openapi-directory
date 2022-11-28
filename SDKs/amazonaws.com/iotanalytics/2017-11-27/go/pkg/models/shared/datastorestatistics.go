package shared

// DatastoreStatistics
// Statistical information about the data store.
type DatastoreStatistics struct {
	Size *EstimatedResourceSize `json:"size,omitempty"`
}
