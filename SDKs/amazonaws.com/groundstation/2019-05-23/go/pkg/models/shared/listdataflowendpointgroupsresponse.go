package shared

// ListDataflowEndpointGroupsResponse
// <p/>
type ListDataflowEndpointGroupsResponse struct {
	DataflowEndpointGroupList []DataflowEndpointListItem `json:"dataflowEndpointGroupList,omitempty"`
	NextToken                 *string                    `json:"nextToken,omitempty"`
}
