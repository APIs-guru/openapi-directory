package shared



type RepositoryAnalysis struct {
    RepositoryHead *RepositoryHeadSourceCodeType `json:"RepositoryHead,omitempty"`
    SourceCodeType *SourceCodeType `json:"SourceCodeType,omitempty"`
    
}

