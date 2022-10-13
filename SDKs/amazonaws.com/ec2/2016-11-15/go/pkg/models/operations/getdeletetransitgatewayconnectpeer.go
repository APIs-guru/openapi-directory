package operations

type GetDeleteTransitGatewayConnectPeerActionEnum string

const (
	GetDeleteTransitGatewayConnectPeerActionEnumDeleteTransitGatewayConnectPeer GetDeleteTransitGatewayConnectPeerActionEnum = "DeleteTransitGatewayConnectPeer"
)

type GetDeleteTransitGatewayConnectPeerVersionEnum string

const (
	GetDeleteTransitGatewayConnectPeerVersionEnumTwoThousandAndSixteen1115 GetDeleteTransitGatewayConnectPeerVersionEnum = "2016-11-15"
)

type GetDeleteTransitGatewayConnectPeerQueryParams struct {
	Action                      GetDeleteTransitGatewayConnectPeerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun                      *bool                                         `queryParam:"style=form,explode=true,name=DryRun"`
	TransitGatewayConnectPeerID string                                        `queryParam:"style=form,explode=true,name=TransitGatewayConnectPeerId"`
	Version                     GetDeleteTransitGatewayConnectPeerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteTransitGatewayConnectPeerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteTransitGatewayConnectPeerRequest struct {
	QueryParams GetDeleteTransitGatewayConnectPeerQueryParams
	Headers     GetDeleteTransitGatewayConnectPeerHeaders
}

type GetDeleteTransitGatewayConnectPeerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
