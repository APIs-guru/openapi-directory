package shared

type GetTransitGatewayRouteTableAssociationsResult struct {
	Associations []TransitGatewayRouteTableAssociation
	NextToken    *string
}
