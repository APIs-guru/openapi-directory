package shared

// RepositoryAnalysis
//
//	A code review type that analyzes all code under a specified branch in an associated repository. The associated repository is specified using its ARN when you call <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CreateCodeReview"> <code>CreateCodeReview</code> </a>.
type RepositoryAnalysis struct {
	RepositoryHead *RepositoryHeadSourceCodeType `json:"RepositoryHead,omitempty"`
	SourceCodeType *SourceCodeType               `json:"SourceCodeType,omitempty"`
}
