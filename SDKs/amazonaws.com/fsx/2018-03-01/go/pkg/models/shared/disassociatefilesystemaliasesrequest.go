package shared

// DisassociateFileSystemAliasesRequest
// The request object of DNS aliases to disassociate from an Amazon FSx for Windows File Server file system.
type DisassociateFileSystemAliasesRequest struct {
	Aliases            []string `json:"Aliases"`
	ClientRequestToken *string  `json:"ClientRequestToken,omitempty"`
	FileSystemID       string   `json:"FileSystemId"`
}
