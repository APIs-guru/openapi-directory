package shared

type InventoryRetrievalJobDescription struct {
	EndDate   *string `json:"EndDate"`
	Format    *string `json:"Format"`
	Limit     *string `json:"Limit"`
	Marker    *string `json:"Marker"`
	StartDate *string `json:"StartDate"`
}
