package shared



type GetEnrollmentStatusesForOrganizationRequest struct {
    Filters []EnrollmentFilter `json:"filters,omitempty"`
    MaxResults *int64 `json:"maxResults,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

