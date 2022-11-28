package shared

// RepositoryHeadSourceCodeType
//
//	A <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies the tip of a branch in an associated repository.
type RepositoryHeadSourceCodeType struct {
	BranchName string `json:"BranchName"`
}
