package shared



type SourceCodeType struct {
    BranchDiff *BranchDiffSourceCodeType `json:"BranchDiff,omitempty"`
    CommitDiff *CommitDiffSourceCodeType `json:"CommitDiff,omitempty"`
    RepositoryHead *RepositoryHeadSourceCodeType `json:"RepositoryHead,omitempty"`
    RequestMetadata *RequestMetadata `json:"RequestMetadata,omitempty"`
    S3BucketRepository *S3BucketRepository `json:"S3BucketRepository,omitempty"`
    
}

