package shared

type BatchDescribeMergeConflictsOutput struct {
	BaseCommitID        *string                            `json:"baseCommitId"`
	Conflicts           []Conflict                         `json:"conflicts"`
	DestinationCommitID string                             `json:"destinationCommitId"`
	Errors              []BatchDescribeMergeConflictsError `json:"errors"`
	NextToken           *string                            `json:"nextToken"`
	SourceCommitID      string                             `json:"sourceCommitId"`
}
