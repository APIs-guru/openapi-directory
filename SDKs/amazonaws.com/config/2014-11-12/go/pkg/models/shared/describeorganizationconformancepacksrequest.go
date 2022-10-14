package shared

type DescribeOrganizationConformancePacksRequest struct {
	Limit                            *int64   `json:"Limit,omitempty"`
	NextToken                        *string  `json:"NextToken,omitempty"`
	OrganizationConformancePackNames []string `json:"OrganizationConformancePackNames,omitempty"`
}
