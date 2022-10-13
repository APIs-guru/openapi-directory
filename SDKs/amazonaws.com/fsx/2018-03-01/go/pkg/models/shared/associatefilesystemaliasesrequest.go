package shared

type AssociateFileSystemAliasesRequest struct {
	Aliases            []string `json:"Aliases"`
	ClientRequestToken *string  `json:"ClientRequestToken"`
	FileSystemID       string   `json:"FileSystemId"`
}
