package shared

type GetDataflowEndpointGroupResponse struct {
	DataflowEndpointGroupArn *string           `json:"dataflowEndpointGroupArn,omitempty"`
	DataflowEndpointGroupID  *string           `json:"dataflowEndpointGroupId,omitempty"`
	EndpointsDetails         []EndpointDetails `json:"endpointsDetails,omitempty"`
	Tags                     map[string]string `json:"tags,omitempty"`
}
