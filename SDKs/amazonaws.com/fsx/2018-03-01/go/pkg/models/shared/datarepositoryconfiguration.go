package shared

// DataRepositoryConfiguration
// The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.
type DataRepositoryConfiguration struct {
	AutoImportPolicy      *AutoImportPolicyTypeEnum     `json:"AutoImportPolicy,omitempty"`
	ExportPath            *string                       `json:"ExportPath,omitempty"`
	FailureDetails        *DataRepositoryFailureDetails `json:"FailureDetails,omitempty"`
	ImportPath            *string                       `json:"ImportPath,omitempty"`
	ImportedFileChunkSize *int64                        `json:"ImportedFileChunkSize,omitempty"`
	Lifecycle             *DataRepositoryLifecycleEnum  `json:"Lifecycle,omitempty"`
}
