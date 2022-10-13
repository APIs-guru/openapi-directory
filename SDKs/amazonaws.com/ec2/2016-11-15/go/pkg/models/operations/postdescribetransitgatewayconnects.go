package operations

type PostDescribeTransitGatewayConnectsActionEnum string

const (
	PostDescribeTransitGatewayConnectsActionEnumDescribeTransitGatewayConnects PostDescribeTransitGatewayConnectsActionEnum = "DescribeTransitGatewayConnects"
)

type PostDescribeTransitGatewayConnectsVersionEnum string

const (
	PostDescribeTransitGatewayConnectsVersionEnumTwoThousandAndSixteen1115 PostDescribeTransitGatewayConnectsVersionEnum = "2016-11-15"
)

type PostDescribeTransitGatewayConnectsQueryParams struct {
	Action     PostDescribeTransitGatewayConnectsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                       `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                       `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeTransitGatewayConnectsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTransitGatewayConnectsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeTransitGatewayConnectsRequest struct {
	QueryParams PostDescribeTransitGatewayConnectsQueryParams
	Headers     PostDescribeTransitGatewayConnectsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTransitGatewayConnectsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
