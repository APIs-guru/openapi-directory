package shared

type CodeRepository struct {
	CodeConfiguration *CodeConfiguration `json:"CodeConfiguration,omitempty"`
	RepositoryURL     string             `json:"RepositoryUrl"`
	SourceCodeVersion SourceCodeVersion  `json:"SourceCodeVersion"`
}
