package shared

type ListLocationsRequest struct {
	Filters    []LocationFilter `json:"Filters"`
	MaxResults *int64           `json:"MaxResults"`
	NextToken  *string          `json:"NextToken"`
}
