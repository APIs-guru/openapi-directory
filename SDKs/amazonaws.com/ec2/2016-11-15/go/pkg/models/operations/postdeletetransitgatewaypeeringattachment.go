package operations

type PostDeleteTransitGatewayPeeringAttachmentActionEnum string

const (
	PostDeleteTransitGatewayPeeringAttachmentActionEnumDeleteTransitGatewayPeeringAttachment PostDeleteTransitGatewayPeeringAttachmentActionEnum = "DeleteTransitGatewayPeeringAttachment"
)

type PostDeleteTransitGatewayPeeringAttachmentVersionEnum string

const (
	PostDeleteTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayPeeringAttachmentQueryParams struct {
	Action  PostDeleteTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayPeeringAttachmentRequest struct {
	QueryParams PostDeleteTransitGatewayPeeringAttachmentQueryParams
	Headers     PostDeleteTransitGatewayPeeringAttachmentHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
