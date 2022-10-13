package shared

type DataflowEndpoint struct {
	Address *SocketAddress      `json:"address"`
	Mtu     *int64              `json:"mtu"`
	Name    *string             `json:"name"`
	Status  *EndpointStatusEnum `json:"status"`
}
