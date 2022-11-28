package shared

// MergeMetadata
// Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.
type MergeMetadata struct {
	IsMerged      *bool                    `json:"isMerged,omitempty"`
	MergeCommitID *string                  `json:"mergeCommitId,omitempty"`
	MergeOption   *MergeOptionTypeEnumEnum `json:"mergeOption,omitempty"`
	MergedBy      *string                  `json:"mergedBy,omitempty"`
}
