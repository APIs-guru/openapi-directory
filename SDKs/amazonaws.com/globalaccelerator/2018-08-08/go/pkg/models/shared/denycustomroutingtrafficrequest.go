package shared

type DenyCustomRoutingTrafficRequest struct {
	DenyAllTrafficToEndpoint *bool    `json:"DenyAllTrafficToEndpoint,omitempty"`
	DestinationAddresses     []string `json:"DestinationAddresses,omitempty"`
	DestinationPorts         []int64  `json:"DestinationPorts,omitempty"`
	EndpointGroupArn         string   `json:"EndpointGroupArn"`
	EndpointID               string   `json:"EndpointId"`
}
