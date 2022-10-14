package shared

type UpdateDirectConnectGatewayAssociationRequest struct {
	AddAllowedPrefixesToDirectConnectGateway    []RouteFilterPrefix `json:"addAllowedPrefixesToDirectConnectGateway,omitempty"`
	AssociationID                               *string             `json:"associationId,omitempty"`
	RemoveAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"removeAllowedPrefixesToDirectConnectGateway,omitempty"`
}
