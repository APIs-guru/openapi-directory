package shared

// ListUserImportJobsRequest
// Represents the request to list the user import jobs.
type ListUserImportJobsRequest struct {
	MaxResults      int64   `json:"MaxResults"`
	PaginationToken *string `json:"PaginationToken,omitempty"`
	UserPoolID      string  `json:"UserPoolId"`
}
