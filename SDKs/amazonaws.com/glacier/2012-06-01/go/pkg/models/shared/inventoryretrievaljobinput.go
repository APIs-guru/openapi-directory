package shared

type InventoryRetrievalJobInput struct {
	EndDate   *string `json:"EndDate"`
	Limit     *string `json:"Limit"`
	Marker    *string `json:"Marker"`
	StartDate *string `json:"StartDate"`
}
