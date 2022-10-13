package shared

type GetOrganizationConformancePackDetailedStatusResponse struct {
	NextToken                                   *string                                     `json:"NextToken"`
	OrganizationConformancePackDetailedStatuses []OrganizationConformancePackDetailedStatus `json:"OrganizationConformancePackDetailedStatuses"`
}
