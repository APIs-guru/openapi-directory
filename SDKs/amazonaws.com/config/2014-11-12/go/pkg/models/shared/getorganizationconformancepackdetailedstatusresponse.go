package shared



type GetOrganizationConformancePackDetailedStatusResponse struct {
    NextToken *string `json:"NextToken,omitempty"`
    OrganizationConformancePackDetailedStatuses []OrganizationConformancePackDetailedStatus `json:"OrganizationConformancePackDetailedStatuses,omitempty"`
    
}

