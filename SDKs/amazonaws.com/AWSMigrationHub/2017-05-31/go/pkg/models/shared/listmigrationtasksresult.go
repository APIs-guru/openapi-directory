package shared



type ListMigrationTasksResult struct {
    MigrationTaskSummaryList []MigrationTaskSummary `json:"MigrationTaskSummaryList,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    
}

