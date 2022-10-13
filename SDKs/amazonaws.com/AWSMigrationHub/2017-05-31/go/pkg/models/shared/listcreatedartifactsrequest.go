package shared

type ListCreatedArtifactsRequest struct {
	MaxResults           *int64  `json:"MaxResults"`
	MigrationTaskName    string  `json:"MigrationTaskName"`
	NextToken            *string `json:"NextToken"`
	ProgressUpdateStream string  `json:"ProgressUpdateStream"`
}
