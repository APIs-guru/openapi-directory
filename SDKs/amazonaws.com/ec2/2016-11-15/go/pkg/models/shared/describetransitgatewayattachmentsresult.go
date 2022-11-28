package shared

type DescribeTransitGatewayAttachmentsResult struct {
	NextToken                 *string
	TransitGatewayAttachments []TransitGatewayAttachment
}
