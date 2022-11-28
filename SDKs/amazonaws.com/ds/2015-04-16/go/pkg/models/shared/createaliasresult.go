package shared

// CreateAliasResult
// Contains the results of the <a>CreateAlias</a> operation.
type CreateAliasResult struct {
	Alias       *string `json:"Alias,omitempty"`
	DirectoryID *string `json:"DirectoryId,omitempty"`
}
