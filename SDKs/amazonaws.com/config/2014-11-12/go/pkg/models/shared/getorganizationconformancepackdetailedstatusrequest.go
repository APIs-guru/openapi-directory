package shared

type GetOrganizationConformancePackDetailedStatusRequest struct {
	Filters                         *OrganizationResourceDetailedStatusFilters `json:"Filters"`
	Limit                           *int64                                     `json:"Limit"`
	NextToken                       *string                                    `json:"NextToken"`
	OrganizationConformancePackName string                                     `json:"OrganizationConformancePackName"`
}
