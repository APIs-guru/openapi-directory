package shared

type MergeMetadata struct {
	IsMerged      *bool                    `json:"isMerged"`
	MergeCommitID *string                  `json:"mergeCommitId"`
	MergeOption   *MergeOptionTypeEnumEnum `json:"mergeOption"`
	MergedBy      *string                  `json:"mergedBy"`
}
