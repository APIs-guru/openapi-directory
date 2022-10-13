package shared

type ListFhirDatastoresRequest struct {
	Filter     *DatastoreFilter `json:"Filter"`
	MaxResults *int64           `json:"MaxResults"`
	NextToken  *string          `json:"NextToken"`
}
