package shared

type ListDatasetsResponse struct {
	Count     *int64    `json:"Count,omitempty"`
	Datasets  []Dataset `json:"Datasets,omitempty"`
	NextToken *string   `json:"NextToken,omitempty"`
}
