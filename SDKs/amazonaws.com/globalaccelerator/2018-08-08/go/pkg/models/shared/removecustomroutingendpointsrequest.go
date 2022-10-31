package shared

type RemoveCustomRoutingEndpointsRequest struct {
	EndpointGroupArn string   `json:"EndpointGroupArn"`
	EndpointIds      []string `json:"EndpointIds"`
}
