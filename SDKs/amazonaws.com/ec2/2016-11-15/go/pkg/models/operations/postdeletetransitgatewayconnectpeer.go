package operations

type PostDeleteTransitGatewayConnectPeerActionEnum string

const (
	PostDeleteTransitGatewayConnectPeerActionEnumDeleteTransitGatewayConnectPeer PostDeleteTransitGatewayConnectPeerActionEnum = "DeleteTransitGatewayConnectPeer"
)

type PostDeleteTransitGatewayConnectPeerVersionEnum string

const (
	PostDeleteTransitGatewayConnectPeerVersionEnumTwoThousandAndSixteen1115 PostDeleteTransitGatewayConnectPeerVersionEnum = "2016-11-15"
)

type PostDeleteTransitGatewayConnectPeerQueryParams struct {
	Action  PostDeleteTransitGatewayConnectPeerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteTransitGatewayConnectPeerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteTransitGatewayConnectPeerHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteTransitGatewayConnectPeerRequest struct {
	QueryParams PostDeleteTransitGatewayConnectPeerQueryParams
	Headers     PostDeleteTransitGatewayConnectPeerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteTransitGatewayConnectPeerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
