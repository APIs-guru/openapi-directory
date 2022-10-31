package operations

type PostDeleteTransitGatewayVpcAttachmentActionEnum string

const (
	PostDeleteTransitGatewayVpcAttachmentActionEnumDeleteTransitGatewayVpcAttachment PostDeleteTransitGatewayVpcAttachmentActionEnum = "DeleteTransitGatewayVpcAttachment"
)

type PostDeleteTransitGatewayVpcAttachmentVersionEnum string

const (
	PostDeleteTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayVpcAttachmentQueryParams struct {
	Action  PostDeleteTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayVpcAttachmentRequest struct {
	QueryParams PostDeleteTransitGatewayVpcAttachmentQueryParams
	Headers     PostDeleteTransitGatewayVpcAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
