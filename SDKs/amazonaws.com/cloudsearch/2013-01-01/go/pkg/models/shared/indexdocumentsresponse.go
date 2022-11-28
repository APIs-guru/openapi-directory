package shared

// IndexDocumentsResponse
// The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.
type IndexDocumentsResponse struct {
	FieldNames []string
}
