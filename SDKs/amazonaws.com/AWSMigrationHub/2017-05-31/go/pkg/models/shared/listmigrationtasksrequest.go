package shared

type ListMigrationTasksRequest struct {
	MaxResults   *int64  `json:"MaxResults"`
	NextToken    *string `json:"NextToken"`
	ResourceName *string `json:"ResourceName"`
}
