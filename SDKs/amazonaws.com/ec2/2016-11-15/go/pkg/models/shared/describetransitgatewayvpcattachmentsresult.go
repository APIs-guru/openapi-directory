package shared

type DescribeTransitGatewayVpcAttachmentsResult struct {
	NextToken                    *string
	TransitGatewayVpcAttachments []TransitGatewayVpcAttachment
}
