package shared

// AssociateFileSystemAliasesRequest
// The request object specifying one or more DNS alias names to associate with an Amazon FSx for Windows File Server file system.
type AssociateFileSystemAliasesRequest struct {
	Aliases            []string `json:"Aliases"`
	ClientRequestToken *string  `json:"ClientRequestToken,omitempty"`
	FileSystemID       string   `json:"FileSystemId"`
}
