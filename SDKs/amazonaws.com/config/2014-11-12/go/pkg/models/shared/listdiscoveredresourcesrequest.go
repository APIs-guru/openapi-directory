package shared

// ListDiscoveredResourcesRequest
// <p/>
type ListDiscoveredResourcesRequest struct {
	IncludeDeletedResources *bool            `json:"includeDeletedResources,omitempty"`
	Limit                   *int64           `json:"limit,omitempty"`
	NextToken               *string          `json:"nextToken,omitempty"`
	ResourceIds             []string         `json:"resourceIds,omitempty"`
	ResourceName            *string          `json:"resourceName,omitempty"`
	ResourceType            ResourceTypeEnum `json:"resourceType"`
}
