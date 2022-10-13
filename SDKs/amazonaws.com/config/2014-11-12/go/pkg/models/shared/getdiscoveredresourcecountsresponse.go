package shared

type GetDiscoveredResourceCountsResponse struct {
	NextToken                *string         `json:"nextToken"`
	ResourceCounts           []ResourceCount `json:"resourceCounts"`
	TotalDiscoveredResources *int64          `json:"totalDiscoveredResources"`
}
