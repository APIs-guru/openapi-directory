package shared

type GetEnrollmentStatusesForOrganizationResponse struct {
	AccountEnrollmentStatuses []AccountEnrollmentStatus `json:"accountEnrollmentStatuses,omitempty"`
	NextToken                 *string                   `json:"nextToken,omitempty"`
}
