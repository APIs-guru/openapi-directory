package shared

type UpdateDirectConnectGatewayAssociationRequest struct {
	AddAllowedPrefixesToDirectConnectGateway    []RouteFilterPrefix `json:"addAllowedPrefixesToDirectConnectGateway"`
	AssociationID                               *string             `json:"associationId"`
	RemoveAllowedPrefixesToDirectConnectGateway []RouteFilterPrefix `json:"removeAllowedPrefixesToDirectConnectGateway"`
}
