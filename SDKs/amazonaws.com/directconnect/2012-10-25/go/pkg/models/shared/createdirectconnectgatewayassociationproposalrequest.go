package shared

type CreateDirectConnectGatewayAssociationProposalRequest struct {
	AddAllowedPrefixesToDirectConnectGateway    []RouteFilterPrefix `json:"addAllowedPrefixesToDirectConnectGateway,omitempty"`
	DirectConnectGatewayID                      string              `json:"directConnectGatewayId"`
	DirectConnectGatewayOwnerAccount            string              `json:"directConnectGatewayOwnerAccount"`
	GatewayID                                   string              `json:"gatewayId"`
	RemoveAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"removeAllowedPrefixesToDirectConnectGateway,omitempty"`
}
