package shared

type GetDataflowEndpointGroupResponse struct {
	DataflowEndpointGroupArn *string           `json:"dataflowEndpointGroupArn"`
	DataflowEndpointGroupID  *string           `json:"dataflowEndpointGroupId"`
	EndpointsDetails         []EndpointDetails `json:"endpointsDetails"`
	Tags                     map[string]string `json:"tags"`
}
