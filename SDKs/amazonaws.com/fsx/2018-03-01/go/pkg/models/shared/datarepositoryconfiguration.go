package shared



type DataRepositoryConfiguration struct {
    AutoImportPolicy *AutoImportPolicyTypeEnum `json:"AutoImportPolicy,omitempty"`
    ExportPath *string `json:"ExportPath,omitempty"`
    FailureDetails *DataRepositoryFailureDetails `json:"FailureDetails,omitempty"`
    ImportPath *string `json:"ImportPath,omitempty"`
    ImportedFileChunkSize *int64 `json:"ImportedFileChunkSize,omitempty"`
    Lifecycle *DataRepositoryLifecycleEnum `json:"Lifecycle,omitempty"`
    
}

