package shared

type PutStoredQueryRequest struct {
	StoredQuery StoredQuery `json:"StoredQuery"`
	Tags        []Tag       `json:"Tags"`
}
