package shared

type ListCreatedArtifactsResult struct {
	CreatedArtifactList []CreatedArtifact `json:"CreatedArtifactList"`
	NextToken           *string           `json:"NextToken"`
}
