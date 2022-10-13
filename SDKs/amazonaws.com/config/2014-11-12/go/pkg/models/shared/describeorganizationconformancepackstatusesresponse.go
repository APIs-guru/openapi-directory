package shared

type DescribeOrganizationConformancePackStatusesResponse struct {
	NextToken                           *string                             `json:"NextToken"`
	OrganizationConformancePackStatuses []OrganizationConformancePackStatus `json:"OrganizationConformancePackStatuses"`
}
