package shared

type OrganizationResourceDetailedStatusFilters struct {
	AccountID *string                                 `json:"AccountId"`
	Status    *OrganizationResourceDetailedStatusEnum `json:"Status"`
}
