package shared

type DescribeTransitGatewayPeeringAttachmentsResult struct {
	NextToken                        *string
	TransitGatewayPeeringAttachments []TransitGatewayPeeringAttachment
}
