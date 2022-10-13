package shared

type DenyCustomRoutingTrafficRequest struct {
	DenyAllTrafficToEndpoint *bool    `json:"DenyAllTrafficToEndpoint"`
	DestinationAddresses     []string `json:"DestinationAddresses"`
	DestinationPorts         []int64  `json:"DestinationPorts"`
	EndpointGroupArn         string   `json:"EndpointGroupArn"`
	EndpointID               string   `json:"EndpointId"`
}
