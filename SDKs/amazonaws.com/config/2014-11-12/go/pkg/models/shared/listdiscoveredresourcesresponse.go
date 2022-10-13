package shared

type ListDiscoveredResourcesResponse struct {
	NextToken           *string              `json:"nextToken"`
	ResourceIdentifiers []ResourceIdentifier `json:"resourceIdentifiers"`
}
