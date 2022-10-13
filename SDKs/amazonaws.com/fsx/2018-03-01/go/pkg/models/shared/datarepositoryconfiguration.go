package shared

type DataRepositoryConfiguration struct {
	AutoImportPolicy      *AutoImportPolicyTypeEnum     `json:"AutoImportPolicy"`
	ExportPath            *string                       `json:"ExportPath"`
	FailureDetails        *DataRepositoryFailureDetails `json:"FailureDetails"`
	ImportPath            *string                       `json:"ImportPath"`
	ImportedFileChunkSize *int64                        `json:"ImportedFileChunkSize"`
	Lifecycle             *DataRepositoryLifecycleEnum  `json:"Lifecycle"`
}
