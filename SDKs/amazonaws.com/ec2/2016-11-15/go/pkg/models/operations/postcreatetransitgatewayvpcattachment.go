package operations

type PostCreateTransitGatewayVpcAttachmentActionEnum string

const (
	PostCreateTransitGatewayVpcAttachmentActionEnumCreateTransitGatewayVpcAttachment PostCreateTransitGatewayVpcAttachmentActionEnum = "CreateTransitGatewayVpcAttachment"
)

type PostCreateTransitGatewayVpcAttachmentVersionEnum string

const (
	PostCreateTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayVpcAttachmentQueryParams struct {
	Action  PostCreateTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayVpcAttachmentRequest struct {
	QueryParams PostCreateTransitGatewayVpcAttachmentQueryParams
	Headers     PostCreateTransitGatewayVpcAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
