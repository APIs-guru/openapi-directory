package shared

type RepositoryAnalysis struct {
	RepositoryHead *RepositoryHeadSourceCodeType `json:"RepositoryHead"`
	SourceCodeType *SourceCodeType               `json:"SourceCodeType"`
}
