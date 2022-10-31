package operations

type PostCreateTransitGatewayConnectActionEnum string

const (
	PostCreateTransitGatewayConnectActionEnumCreateTransitGatewayConnect PostCreateTransitGatewayConnectActionEnum = "CreateTransitGatewayConnect"
)

type PostCreateTransitGatewayConnectVersionEnum string

const (
	PostCreateTransitGatewayConnectVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayConnectVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayConnectQueryParams struct {
	Action  PostCreateTransitGatewayConnectActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayConnectVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayConnectHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayConnectRequest struct {
	QueryParams PostCreateTransitGatewayConnectQueryParams
	Headers     PostCreateTransitGatewayConnectHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayConnectResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
