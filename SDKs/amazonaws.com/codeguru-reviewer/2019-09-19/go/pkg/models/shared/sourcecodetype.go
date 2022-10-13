package shared

type SourceCodeType struct {
	BranchDiff         *BranchDiffSourceCodeType     `json:"BranchDiff"`
	CommitDiff         *CommitDiffSourceCodeType     `json:"CommitDiff"`
	RepositoryHead     *RepositoryHeadSourceCodeType `json:"RepositoryHead"`
	RequestMetadata    *RequestMetadata              `json:"RequestMetadata"`
	S3BucketRepository *S3BucketRepository           `json:"S3BucketRepository"`
}
