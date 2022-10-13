package shared

type DescribeDirectConnectGatewayAssociationsRequest struct {
	AssociatedGatewayID    *string `json:"associatedGatewayId"`
	AssociationID          *string `json:"associationId"`
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	MaxResults             *int64  `json:"maxResults"`
	NextToken              *string `json:"nextToken"`
	VirtualGatewayID       *string `json:"virtualGatewayId"`
}
