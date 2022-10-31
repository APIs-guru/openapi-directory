package shared

type ListUserImportJobsResponse struct {
	PaginationToken *string             `json:"PaginationToken,omitempty"`
	UserImportJobs  []UserImportJobType `json:"UserImportJobs,omitempty"`
}
