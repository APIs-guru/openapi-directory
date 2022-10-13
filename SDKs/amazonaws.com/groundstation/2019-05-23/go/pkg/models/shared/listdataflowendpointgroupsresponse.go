package shared

type ListDataflowEndpointGroupsResponse struct {
	DataflowEndpointGroupList []DataflowEndpointListItem `json:"dataflowEndpointGroupList"`
	NextToken                 *string                    `json:"nextToken"`
}
