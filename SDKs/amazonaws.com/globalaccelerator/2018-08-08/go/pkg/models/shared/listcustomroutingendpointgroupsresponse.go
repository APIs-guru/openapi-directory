package shared

type ListCustomRoutingEndpointGroupsResponse struct {
	EndpointGroups []CustomRoutingEndpointGroup `json:"EndpointGroups"`
	NextToken      *string                      `json:"NextToken"`
}
