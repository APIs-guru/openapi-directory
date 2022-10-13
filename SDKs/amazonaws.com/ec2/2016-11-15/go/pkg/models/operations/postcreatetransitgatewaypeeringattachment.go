package operations

type PostCreateTransitGatewayPeeringAttachmentActionEnum string

const (
	PostCreateTransitGatewayPeeringAttachmentActionEnumCreateTransitGatewayPeeringAttachment PostCreateTransitGatewayPeeringAttachmentActionEnum = "CreateTransitGatewayPeeringAttachment"
)

type PostCreateTransitGatewayPeeringAttachmentVersionEnum string

const (
	PostCreateTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayPeeringAttachmentQueryParams struct {
	Action  PostCreateTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayPeeringAttachmentRequest struct {
	QueryParams PostCreateTransitGatewayPeeringAttachmentQueryParams
	Headers     PostCreateTransitGatewayPeeringAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
