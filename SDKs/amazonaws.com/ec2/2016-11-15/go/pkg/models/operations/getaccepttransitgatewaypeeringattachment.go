package operations

type GetAcceptTransitGatewayPeeringAttachmentActionEnum string

const (
	GetAcceptTransitGatewayPeeringAttachmentActionEnumAcceptTransitGatewayPeeringAttachment GetAcceptTransitGatewayPeeringAttachmentActionEnum = "AcceptTransitGatewayPeeringAttachment"
)

type GetAcceptTransitGatewayPeeringAttachmentVersionEnum string

const (
	GetAcceptTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 GetAcceptTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type GetAcceptTransitGatewayPeeringAttachmentQueryParams struct {
	Action                     GetAcceptTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                               `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                              `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetAcceptTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetAcceptTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetAcceptTransitGatewayPeeringAttachmentRequest struct {
	QueryParams GetAcceptTransitGatewayPeeringAttachmentQueryParams
	Headers     GetAcceptTransitGatewayPeeringAttachmentHeaders
}

type GetAcceptTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
