package shared

type NeighborConnectionDetail struct {
	ConnectionsCount    int64   `json:"connectionsCount"`
	DestinationPort     *int64  `json:"destinationPort,omitempty"`
	DestinationServerID string  `json:"destinationServerId"`
	SourceServerID      string  `json:"sourceServerId"`
	TransportProtocol   *string `json:"transportProtocol,omitempty"`
}
