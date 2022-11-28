package shared

// ListDiscoveredResourcesResponse
// <p/>
type ListDiscoveredResourcesResponse struct {
	NextToken           *string              `json:"nextToken,omitempty"`
	ResourceIdentifiers []ResourceIdentifier `json:"resourceIdentifiers,omitempty"`
}
