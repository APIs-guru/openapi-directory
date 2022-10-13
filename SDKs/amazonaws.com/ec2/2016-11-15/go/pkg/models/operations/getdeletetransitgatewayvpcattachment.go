package operations

type GetDeleteTransitGatewayVpcAttachmentActionEnum string

const (
	GetDeleteTransitGatewayVpcAttachmentActionEnumDeleteTransitGatewayVpcAttachment GetDeleteTransitGatewayVpcAttachmentActionEnum = "DeleteTransitGatewayVpcAttachment"
)

type GetDeleteTransitGatewayVpcAttachmentVersionEnum string

const (
	GetDeleteTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayVpcAttachmentQueryParams struct {
	Action                     GetDeleteTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                           `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                          `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetDeleteTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayVpcAttachmentRequest struct {
	QueryParams GetDeleteTransitGatewayVpcAttachmentQueryParams
	Headers     GetDeleteTransitGatewayVpcAttachmentHeaders
}

type GetDeleteTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
