package shared

type ListDatasetsResponse struct {
	Count     *int64    `json:"Count"`
	Datasets  []Dataset `json:"Datasets"`
	NextToken *string   `json:"NextToken"`
}
