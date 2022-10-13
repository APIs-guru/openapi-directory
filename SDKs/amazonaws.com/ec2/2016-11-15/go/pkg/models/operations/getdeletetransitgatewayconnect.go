package operations

type GetDeleteTransitGatewayConnectActionEnum string

const (
	GetDeleteTransitGatewayConnectActionEnumDeleteTransitGatewayConnect GetDeleteTransitGatewayConnectActionEnum = "DeleteTransitGatewayConnect"
)

type GetDeleteTransitGatewayConnectVersionEnum string

const (
	GetDeleteTransitGatewayConnectVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayConnectVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayConnectQueryParams struct {
	Action                     GetDeleteTransitGatewayConnectActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                     *bool                                     `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayAttachmentID string                                    `queryParam:"style=form,explode=true,name=TransitGatewayAttachmentId"`
	Version                    GetDeleteTransitGatewayConnectVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayConnectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayConnectRequest struct {
	QueryParams GetDeleteTransitGatewayConnectQueryParams
	Headers     GetDeleteTransitGatewayConnectHeaders
}

type GetDeleteTransitGatewayConnectResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
