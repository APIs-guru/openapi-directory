package shared

type GetEnrollmentStatusesForOrganizationRequest struct {
	Filters    []EnrollmentFilter `json:"filters"`
	MaxResults *int64             `json:"maxResults"`
	NextToken  *string            `json:"nextToken"`
}
