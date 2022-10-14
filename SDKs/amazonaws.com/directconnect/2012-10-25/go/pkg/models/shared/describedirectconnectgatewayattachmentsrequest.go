package shared

type DescribeDirectConnectGatewayAttachmentsRequest struct {
	DirectConnectGatewayID *string `json:"directConnectGatewayId,omitempty"`
	MaxResults             *int64  `json:"maxResults,omitempty"`
	NextToken              *string `json:"nextToken,omitempty"`
	VirtualInterfaceID     *string `json:"virtualInterfaceId,omitempty"`
}
