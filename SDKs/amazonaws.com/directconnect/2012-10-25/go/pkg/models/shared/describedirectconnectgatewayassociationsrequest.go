package shared

type DescribeDirectConnectGatewayAssociationsRequest struct {
	AssociatedGatewayID    *string `json:"associatedGatewayId,omitempty"`
	AssociationID          *string `json:"associationId,omitempty"`
	DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
	MaxResults             *int64  `json:"maxResults,omitempty"`
	NextToken              *string `json:"nextToken,omitempty"`
	VirtualGatewayID       *string `json:"virtualGatewayId,omitempty"`
}
