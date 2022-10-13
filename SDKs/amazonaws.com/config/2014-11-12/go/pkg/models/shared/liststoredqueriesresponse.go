package shared

type ListStoredQueriesResponse struct {
	NextToken           *string               `json:"NextToken"`
	StoredQueryMetadata []StoredQueryMetadata `json:"StoredQueryMetadata"`
}
