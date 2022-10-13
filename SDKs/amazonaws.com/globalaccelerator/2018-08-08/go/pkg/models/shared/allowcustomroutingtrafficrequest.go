package shared

type AllowCustomRoutingTrafficRequest struct {
	AllowAllTrafficToEndpoint *bool    `json:"AllowAllTrafficToEndpoint"`
	DestinationAddresses      []string `json:"DestinationAddresses"`
	DestinationPorts          []int64  `json:"DestinationPorts"`
	EndpointGroupArn          string   `json:"EndpointGroupArn"`
	EndpointID                string   `json:"EndpointId"`
}
