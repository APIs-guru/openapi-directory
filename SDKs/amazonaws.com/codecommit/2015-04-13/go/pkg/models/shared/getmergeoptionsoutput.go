package shared

type GetMergeOptionsOutput struct {
	BaseCommitID        string                    `json:"baseCommitId"`
	DestinationCommitID string                    `json:"destinationCommitId"`
	MergeOptions        []MergeOptionTypeEnumEnum `json:"mergeOptions"`
	SourceCommitID      string                    `json:"sourceCommitId"`
}
