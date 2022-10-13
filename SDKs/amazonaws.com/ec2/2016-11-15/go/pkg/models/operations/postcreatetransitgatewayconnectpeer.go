package operations

type PostCreateTransitGatewayConnectPeerActionEnum string

const (
	PostCreateTransitGatewayConnectPeerActionEnumCreateTransitGatewayConnectPeer PostCreateTransitGatewayConnectPeerActionEnum = "CreateTransitGatewayConnectPeer"
)

type PostCreateTransitGatewayConnectPeerVersionEnum string

const (
	PostCreateTransitGatewayConnectPeerVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayConnectPeerVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayConnectPeerQueryParams struct {
	Action  PostCreateTransitGatewayConnectPeerActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayConnectPeerVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayConnectPeerHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayConnectPeerRequest struct {
	QueryParams PostCreateTransitGatewayConnectPeerQueryParams
	Headers     PostCreateTransitGatewayConnectPeerHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayConnectPeerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
