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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
