package shared

// ListDatasetsResponse
// Returned for a successful ListDatasets request.
type ListDatasetsResponse struct {
	Count     *int64    `json:"Count,omitempty"`
	Datasets  []Dataset `json:"Datasets,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
