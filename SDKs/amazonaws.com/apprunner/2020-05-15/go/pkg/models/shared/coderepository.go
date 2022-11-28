package shared

// CodeRepository
// Describes a source code repository.
type CodeRepository struct {
	CodeConfiguration *CodeConfiguration `json:"CodeConfiguration,omitempty"`
	RepositoryURL     string             `json:"RepositoryUrl"`
	SourceCodeVersion SourceCodeVersion  `json:"SourceCodeVersion"`
}
