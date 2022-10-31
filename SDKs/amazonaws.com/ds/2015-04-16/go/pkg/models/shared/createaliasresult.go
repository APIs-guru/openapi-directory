package shared

type CreateAliasResult struct {
	Alias       *string `json:"Alias,omitempty"`
	DirectoryID *string `json:"DirectoryId,omitempty"`
}
