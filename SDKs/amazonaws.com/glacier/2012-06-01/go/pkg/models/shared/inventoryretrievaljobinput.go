package shared

// InventoryRetrievalJobInput
// Provides options for specifying a range inventory retrieval job.
type InventoryRetrievalJobInput struct {
	EndDate   *string `json:"EndDate,omitempty"`
	Limit     *string `json:"Limit,omitempty"`
	Marker    *string `json:"Marker,omitempty"`
	StartDate *string `json:"StartDate,omitempty"`
}
