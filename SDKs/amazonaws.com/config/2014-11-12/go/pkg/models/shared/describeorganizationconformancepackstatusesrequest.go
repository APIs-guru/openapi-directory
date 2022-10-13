package shared

type DescribeOrganizationConformancePackStatusesRequest struct {
	Limit                            *int64   `json:"Limit"`
	NextToken                        *string  `json:"NextToken"`
	OrganizationConformancePackNames []string `json:"OrganizationConformancePackNames"`
}
