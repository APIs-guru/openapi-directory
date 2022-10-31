package operations

type GetDeleteTransitGatewayPeeringAttachmentActionEnum string

const (
	GetDeleteTransitGatewayPeeringAttachmentActionEnumDeleteTransitGatewayPeeringAttachment GetDeleteTransitGatewayPeeringAttachmentActionEnum = "DeleteTransitGatewayPeeringAttachment"
)

type GetDeleteTransitGatewayPeeringAttachmentVersionEnum string

const (
	GetDeleteTransitGatewayPeeringAttachmentVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayPeeringAttachmentVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayPeeringAttachmentQueryParams struct {
	Action                     GetDeleteTransitGatewayPeeringAttachmentActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                               `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                              `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetDeleteTransitGatewayPeeringAttachmentVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayPeeringAttachmentHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayPeeringAttachmentRequest struct {
	QueryParams GetDeleteTransitGatewayPeeringAttachmentQueryParams
	Headers     GetDeleteTransitGatewayPeeringAttachmentHeaders
}

type GetDeleteTransitGatewayPeeringAttachmentResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
