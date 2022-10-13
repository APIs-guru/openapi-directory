package shared

type ListDiscoveredResourcesResult struct {
	DiscoveredResourceList []DiscoveredResource `json:"DiscoveredResourceList"`
	NextToken              *string              `json:"NextToken"`
}
