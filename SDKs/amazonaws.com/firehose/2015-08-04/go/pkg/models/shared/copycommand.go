package shared

// CopyCommand
// Describes a <code>COPY</code> command for Amazon Redshift.
type CopyCommand struct {
	CopyOptions      *string `json:"CopyOptions,omitempty"`
	DataTableColumns *string `json:"DataTableColumns,omitempty"`
	DataTableName    string  `json:"DataTableName"`
}
