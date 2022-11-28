package shared

// CreateAliasRequest
// Contains the inputs for the <a>CreateAlias</a> operation.
type CreateAliasRequest struct {
	Alias       string `json:"Alias"`
	DirectoryID string `json:"DirectoryId"`
}
