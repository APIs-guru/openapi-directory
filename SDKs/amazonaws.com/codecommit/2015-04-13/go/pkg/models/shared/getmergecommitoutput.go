package shared

type GetMergeCommitOutput struct {
	BaseCommitID        *string `json:"baseCommitId"`
	DestinationCommitID *string `json:"destinationCommitId"`
	MergedCommitID      *string `json:"mergedCommitId"`
	SourceCommitID      *string `json:"sourceCommitId"`
}
