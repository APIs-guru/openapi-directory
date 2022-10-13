package operations

type PostAcceptTransitGatewayVpcAttachmentActionEnum string

const (
	PostAcceptTransitGatewayVpcAttachmentActionEnumAcceptTransitGatewayVpcAttachment PostAcceptTransitGatewayVpcAttachmentActionEnum = "AcceptTransitGatewayVpcAttachment"
)

type PostAcceptTransitGatewayVpcAttachmentVersionEnum string

const (
	PostAcceptTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 PostAcceptTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type PostAcceptTransitGatewayVpcAttachmentQueryParams struct {
	Action  PostAcceptTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAcceptTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAcceptTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostAcceptTransitGatewayVpcAttachmentRequest struct {
	QueryParams PostAcceptTransitGatewayVpcAttachmentQueryParams
	Headers     PostAcceptTransitGatewayVpcAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAcceptTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
