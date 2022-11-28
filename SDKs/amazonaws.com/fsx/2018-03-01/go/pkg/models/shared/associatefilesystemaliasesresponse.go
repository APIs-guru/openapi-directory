package shared

// AssociateFileSystemAliasesResponse
// The system generated response showing the DNS aliases that Amazon FSx is attempting to associate with the file system. Use the API operation to monitor the status of the aliases Amazon FSx is associating with the file system. It can take up to 2.5 minutes for the alias status to change from <code>CREATING</code> to <code>AVAILABLE</code>.
type AssociateFileSystemAliasesResponse struct {
	Aliases []Alias `json:"Aliases,omitempty"`
}
