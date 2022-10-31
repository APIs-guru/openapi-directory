package shared



type GetOrganizationConformancePackDetailedStatusRequest struct {
    Filters *OrganizationResourceDetailedStatusFilters `json:"Filters,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationConformancePackName string `json:"OrganizationConformancePackName"`
    
}

