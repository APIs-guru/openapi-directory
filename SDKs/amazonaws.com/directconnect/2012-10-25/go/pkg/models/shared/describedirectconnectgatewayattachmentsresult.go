package shared



type DescribeDirectConnectGatewayAttachmentsResult struct {
    DirectConnectGatewayAttachments []DirectConnectGatewayAttachment `json:"directConnectGatewayAttachments,omitempty"`
    NextToken *string `json:"nextToken,omitempty"`
    
}

