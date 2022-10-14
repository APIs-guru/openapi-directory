package shared

type AllowCustomRoutingTrafficRequest struct {
	AllowAllTrafficToEndpoint *bool    `json:"AllowAllTrafficToEndpoint,omitempty"`
	DestinationAddresses      []string `json:"DestinationAddresses,omitempty"`
	DestinationPorts          []int64  `json:"DestinationPorts,omitempty"`
	EndpointGroupArn          string   `json:"EndpointGroupArn"`
	EndpointID                string   `json:"EndpointId"`
}
