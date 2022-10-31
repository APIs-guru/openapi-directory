package shared

type DescribeMigrationTaskRequest struct {
	MigrationTaskName    string `json:"MigrationTaskName"`
	ProgressUpdateStream string `json:"ProgressUpdateStream"`
}
