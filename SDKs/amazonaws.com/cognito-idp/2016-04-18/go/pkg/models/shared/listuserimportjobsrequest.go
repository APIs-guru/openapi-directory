package shared



type ListUserImportJobsRequest struct {
    MaxResults int64 `json:"MaxResults"`
    PaginationToken *string `json:"PaginationToken,omitempty"`
    UserPoolID string `json:"UserPoolId"`
    
}

