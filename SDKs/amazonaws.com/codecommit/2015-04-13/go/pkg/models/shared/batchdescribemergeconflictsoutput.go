package shared



type BatchDescribeMergeConflictsOutput struct {
    BaseCommitID *string `json:"baseCommitId,omitempty"`
    Conflicts []Conflict `json:"conflicts"`
    DestinationCommitID string `json:"destinationCommitId"`
    Errors []BatchDescribeMergeConflictsError `json:"errors,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    SourceCommitID string `json:"sourceCommitId"`
    
}

