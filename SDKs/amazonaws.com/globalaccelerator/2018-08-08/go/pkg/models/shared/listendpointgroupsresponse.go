package shared

type ListEndpointGroupsResponse struct {
	EndpointGroups []EndpointGroup `json:"EndpointGroups"`
	NextToken      *string         `json:"NextToken"`
}
