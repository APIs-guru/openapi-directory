package shared

type DescribeDirectConnectGatewayAttachmentsRequest struct {
	DirectConnectGatewayID *string `json:"directConnectGatewayId"`
	MaxResults             *int64  `json:"maxResults"`
	NextToken              *string `json:"nextToken"`
	VirtualInterfaceID     *string `json:"virtualInterfaceId"`
}
