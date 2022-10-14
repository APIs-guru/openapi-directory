package shared

type ListFhirDatastoresRequest struct {
	Filter     *DatastoreFilter `json:"Filter,omitempty"`
	MaxResults *int64           `json:"MaxResults,omitempty"`
	NextToken  *string          `json:"NextToken,omitempty"`
}
