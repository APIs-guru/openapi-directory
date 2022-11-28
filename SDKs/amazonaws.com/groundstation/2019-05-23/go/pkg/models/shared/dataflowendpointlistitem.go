package shared

// DataflowEndpointListItem
// Item in a list of <code>DataflowEndpoint</code> groups.
type DataflowEndpointListItem struct {
	DataflowEndpointGroupArn *string `json:"dataflowEndpointGroupArn,omitempty"`
	DataflowEndpointGroupID  *string `json:"dataflowEndpointGroupId,omitempty"`
}
