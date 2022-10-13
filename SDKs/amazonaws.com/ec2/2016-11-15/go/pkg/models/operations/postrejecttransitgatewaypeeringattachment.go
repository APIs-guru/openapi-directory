package operations

type PostRejectTransitGatewayPeeringAttachmentActionEnum string

const (
	PostRejectTransitGatewayPeeringAttachmentActionEnumRejectTransitGatewayPeeringAttachment PostRejectTransitGatewayPeeringAttachmentActionEnum = "RejectTransitGatewayPeeringAttachment"
)

type PostRejectTransitGatewayPeeringAttachmentVersionEnum string

const (
	PostRejectTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 PostRejectTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type PostRejectTransitGatewayPeeringAttachmentQueryParams struct {
	Action  PostRejectTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRejectTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRejectTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRejectTransitGatewayPeeringAttachmentRequest struct {
	QueryParams PostRejectTransitGatewayPeeringAttachmentQueryParams
	Headers     PostRejectTransitGatewayPeeringAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRejectTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
