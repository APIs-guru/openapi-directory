package shared

type ListEndpointGroupsResponse struct {
	EndpointGroups []EndpointGroup `json:"EndpointGroups,omitempty"`
	NextToken      *string         `json:"NextToken,omitempty"`
}
