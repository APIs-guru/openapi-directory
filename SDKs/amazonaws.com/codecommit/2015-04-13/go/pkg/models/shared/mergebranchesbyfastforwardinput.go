package shared

type MergeBranchesByFastForwardInput struct {
	DestinationCommitSpecifier string  `json:"destinationCommitSpecifier"`
	RepositoryName             string  `json:"repositoryName"`
	SourceCommitSpecifier      string  `json:"sourceCommitSpecifier"`
	TargetBranch               *string `json:"targetBranch,omitempty"`
}
