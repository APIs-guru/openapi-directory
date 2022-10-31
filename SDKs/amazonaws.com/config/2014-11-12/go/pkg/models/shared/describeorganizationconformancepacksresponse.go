package shared



type DescribeOrganizationConformancePacksResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationConformancePacks []OrganizationConformancePack `json:"OrganizationConformancePacks,omitempty"`
    
}

