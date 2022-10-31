package shared

type ListCustomRoutingEndpointGroupsResponse struct {
	EndpointGroups []CustomRoutingEndpointGroup `json:"EndpointGroups,omitempty"`
	NextToken      *string                      `json:"NextToken,omitempty"`
}
