package shared

type GetEnrollmentStatusesForOrganizationResponse struct {
	AccountEnrollmentStatuses []AccountEnrollmentStatus `json:"accountEnrollmentStatuses"`
	NextToken                 *string                   `json:"nextToken"`
}
