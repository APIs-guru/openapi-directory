package operations

type GetAcceptTransitGatewayVpcAttachmentActionEnum string

const (
	GetAcceptTransitGatewayVpcAttachmentActionEnumAcceptTransitGatewayVpcAttachment GetAcceptTransitGatewayVpcAttachmentActionEnum = "AcceptTransitGatewayVpcAttachment"
)

type GetAcceptTransitGatewayVpcAttachmentVersionEnum string

const (
	GetAcceptTransitGatewayVpcAttachmentVersionEnumTwoThousandAndSixteen1115 GetAcceptTransitGatewayVpcAttachmentVersionEnum = "2016-11-15"
)

type GetAcceptTransitGatewayVpcAttachmentQueryParams struct {
	Action                     GetAcceptTransitGatewayVpcAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                           `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                          `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetAcceptTransitGatewayVpcAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAcceptTransitGatewayVpcAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAcceptTransitGatewayVpcAttachmentRequest struct {
	QueryParams GetAcceptTransitGatewayVpcAttachmentQueryParams
	Headers     GetAcceptTransitGatewayVpcAttachmentHeaders
}

type GetAcceptTransitGatewayVpcAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
