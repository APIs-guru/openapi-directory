package shared

// ListUserImportJobsResponse
// Represents the response from the server to the request to list the user import jobs.
type ListUserImportJobsResponse struct {
	PaginationToken *string             `json:"PaginationToken,omitempty"`
	UserImportJobs  []UserImportJobType `json:"UserImportJobs,omitempty"`
}
