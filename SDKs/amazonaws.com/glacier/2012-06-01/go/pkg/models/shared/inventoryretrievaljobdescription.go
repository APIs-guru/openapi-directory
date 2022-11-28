package shared

// InventoryRetrievalJobDescription
// Describes the options for a range inventory retrieval job.
type InventoryRetrievalJobDescription struct {
	EndDate   *string `json:"EndDate,omitempty"`
	Format    *string `json:"Format,omitempty"`
	Limit     *string `json:"Limit,omitempty"`
	Marker    *string `json:"Marker,omitempty"`
	StartDate *string `json:"StartDate,omitempty"`
}
