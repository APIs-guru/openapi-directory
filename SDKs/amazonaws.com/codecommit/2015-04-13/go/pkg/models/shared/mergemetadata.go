package shared



type MergeMetadata struct {
    IsMerged *bool `json:"isMerged,omitempty"`
    MergeCommitID *string `json:"mergeCommitId,omitempty"`
    MergeOption *MergeOptionTypeEnumEnum `json:"mergeOption,omitempty"`
    MergedBy *string `json:"mergedBy,omitempty"`
    
}

