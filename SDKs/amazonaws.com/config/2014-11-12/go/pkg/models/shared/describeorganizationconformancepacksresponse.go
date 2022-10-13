package shared

type DescribeOrganizationConformancePacksResponse struct {
	NextToken                    *string                       `json:"NextToken"`
	OrganizationConformancePacks []OrganizationConformancePack `json:"OrganizationConformancePacks"`
}
