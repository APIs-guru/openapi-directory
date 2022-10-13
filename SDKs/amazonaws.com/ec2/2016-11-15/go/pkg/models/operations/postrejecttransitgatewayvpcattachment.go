package operations

type PostRejectTransitGatewayVpcAttachmentActionEnum string

const (
	PostRejectTransitGatewayVpcAttachmentActionEnumRejectTransitGatewayVpcAttachment PostRejectTransitGatewayVpcAttachmentActionEnum = "RejectTransitGatewayVpcAttachment"
)

type PostRejectTransitGatewayVpcAttachmentVersionEnum string

const (
	PostRejectTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 PostRejectTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type PostRejectTransitGatewayVpcAttachmentQueryParams struct {
	Action  PostRejectTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRejectTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRejectTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRejectTransitGatewayVpcAttachmentRequest struct {
	QueryParams PostRejectTransitGatewayVpcAttachmentQueryParams
	Headers     PostRejectTransitGatewayVpcAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRejectTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
