package shared

type ListUserImportJobsResponse struct {
	PaginationToken *string             `json:"PaginationToken"`
	UserImportJobs  []UserImportJobType `json:"UserImportJobs"`
}
