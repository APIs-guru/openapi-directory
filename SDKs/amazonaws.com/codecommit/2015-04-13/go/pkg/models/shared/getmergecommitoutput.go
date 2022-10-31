package shared

type GetMergeCommitOutput struct {
	BaseCommitID        *string `json:"baseCommitId,omitempty"`
	DestinationCommitID *string `json:"destinationCommitId,omitempty"`
	MergedCommitID      *string `json:"mergedCommitId,omitempty"`
	SourceCommitID      *string `json:"sourceCommitId,omitempty"`
}
