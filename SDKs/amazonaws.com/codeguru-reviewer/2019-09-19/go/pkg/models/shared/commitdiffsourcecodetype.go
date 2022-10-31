package shared



type CommitDiffSourceCodeType struct {
    DestinationCommit *string `json:"DestinationCommit,omitempty"`
    MergeBaseCommit *string `json:"MergeBaseCommit,omitempty"`
    SourceCommit *string `json:"SourceCommit,omitempty"`
    
}

