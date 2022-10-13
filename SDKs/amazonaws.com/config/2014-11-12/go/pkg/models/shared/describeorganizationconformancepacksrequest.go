package shared

type DescribeOrganizationConformancePacksRequest struct {
	Limit                            *int64   `json:"Limit"`
	NextToken                        *string  `json:"NextToken"`
	OrganizationConformancePackNames []string `json:"OrganizationConformancePackNames"`
}
