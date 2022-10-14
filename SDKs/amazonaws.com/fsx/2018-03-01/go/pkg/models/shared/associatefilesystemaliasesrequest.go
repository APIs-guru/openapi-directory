package shared

type AssociateFileSystemAliasesRequest struct {
	Aliases            []string `json:"Aliases"`
	ClientRequestToken *string  `json:"ClientRequestToken,omitempty"`
	FileSystemID       string   `json:"FileSystemId"`
}
