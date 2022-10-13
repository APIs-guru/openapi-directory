package operations

type PostDescribeTransitGatewayConnectPeersActionEnum string

const (
	PostDescribeTransitGatewayConnectPeersActionEnumDescribeTransitGatewayConnectPeers PostDescribeTransitGatewayConnectPeersActionEnum = "DescribeTransitGatewayConnectPeers"
)

type PostDescribeTransitGatewayConnectPeersVersionEnum string

const (
	PostDescribeTransitGatewayConnectPeersVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayConnectPeersVersionEnum = "2016-11-15"
)

type PostDescribeTransitGatewayConnectPeersQueryParams struct {
	Action     PostDescribeTransitGatewayConnectPeersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                           `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                           `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTransitGatewayConnectPeersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTransitGatewayConnectPeersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTransitGatewayConnectPeersRequest struct {
	QueryParams PostDescribeTransitGatewayConnectPeersQueryParams
	Headers     PostDescribeTransitGatewayConnectPeersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTransitGatewayConnectPeersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
