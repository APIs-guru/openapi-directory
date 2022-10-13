package shared

type DescribeDomainControllersResult struct {
	DomainControllers []DomainController `json:"DomainControllers"`
	NextToken         *string            `json:"NextToken"`
}
