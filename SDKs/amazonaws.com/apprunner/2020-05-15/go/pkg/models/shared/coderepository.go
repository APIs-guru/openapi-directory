package shared

type CodeRepository struct {
	CodeConfiguration *CodeConfiguration `json:"CodeConfiguration"`
	RepositoryURL     string             `json:"RepositoryUrl"`
	SourceCodeVersion SourceCodeVersion  `json:"SourceCodeVersion"`
}
