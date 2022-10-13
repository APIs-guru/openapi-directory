package shared

type CommitDiffSourceCodeType struct {
	DestinationCommit *string `json:"DestinationCommit"`
	MergeBaseCommit   *string `json:"MergeBaseCommit"`
	SourceCommit      *string `json:"SourceCommit"`
}
