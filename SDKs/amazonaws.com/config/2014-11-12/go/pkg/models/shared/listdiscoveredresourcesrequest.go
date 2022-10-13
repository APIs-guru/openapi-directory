package shared

type ListDiscoveredResourcesRequest struct {
	IncludeDeletedResources *bool            `json:"includeDeletedResources"`
	Limit                   *int64           `json:"limit"`
	NextToken               *string          `json:"nextToken"`
	ResourceIds             []string         `json:"resourceIds"`
	ResourceName            *string          `json:"resourceName"`
	ResourceType            ResourceTypeEnum `json:"resourceType"`
}
