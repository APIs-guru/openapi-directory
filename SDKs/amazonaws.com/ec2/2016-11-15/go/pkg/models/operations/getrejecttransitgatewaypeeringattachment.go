package operations

type GetRejectTransitGatewayPeeringAttachmentActionEnum string

const (
	GetRejectTransitGatewayPeeringAttachmentActionEnumRejectTransitGatewayPeeringAttachment GetRejectTransitGatewayPeeringAttachmentActionEnum = "RejectTransitGatewayPeeringAttachment"
)

type GetRejectTransitGatewayPeeringAttachmentVersionEnum string

const (
	GetRejectTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 GetRejectTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type GetRejectTransitGatewayPeeringAttachmentQueryParams struct {
	Action                     GetRejectTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                               `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                              `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetRejectTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRejectTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRejectTransitGatewayPeeringAttachmentRequest struct {
	QueryParams GetRejectTransitGatewayPeeringAttachmentQueryParams
	Headers     GetRejectTransitGatewayPeeringAttachmentHeaders
}

type GetRejectTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
