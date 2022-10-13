package shared

type DescribeDirectConnectGatewayAttachmentsResult struct {
	DirectConnectGatewayAttachments []DirectConnectGatewayAttachment `json:"directConnectGatewayAttachments"`
	NextToken                       *string                          `json:"nextToken"`
}
