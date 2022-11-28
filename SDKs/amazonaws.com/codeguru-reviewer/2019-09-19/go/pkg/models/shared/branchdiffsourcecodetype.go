package shared

// BranchDiffSourceCodeType
//
//	A type of <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_SourceCodeType"> <code>SourceCodeType</code> </a> that specifies a code diff between a source and destination branch in an associated repository.
type BranchDiffSourceCodeType struct {
	DestinationBranchName string `json:"DestinationBranchName"`
	SourceBranchName      string `json:"SourceBranchName"`
}
