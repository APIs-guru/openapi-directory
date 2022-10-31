package shared

type DescribeOrganizationConformancePackStatusesResponse struct {
	NextToken                           *string                             `json:"NextToken,omitempty"`
	OrganizationConformancePackStatuses []OrganizationConformancePackStatus `json:"OrganizationConformancePackStatuses,omitempty"`
}
