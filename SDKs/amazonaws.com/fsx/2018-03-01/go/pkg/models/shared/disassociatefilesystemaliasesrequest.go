package shared



type DisassociateFileSystemAliasesRequest struct {
    Aliases []string `json:"Aliases"`
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    FileSystemID string `json:"FileSystemId"`
    
}

