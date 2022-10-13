package shared

type ListMigrationTasksResult struct {
	MigrationTaskSummaryList []MigrationTaskSummary `json:"MigrationTaskSummaryList"`
	NextToken                *string                `json:"NextToken"`
}
