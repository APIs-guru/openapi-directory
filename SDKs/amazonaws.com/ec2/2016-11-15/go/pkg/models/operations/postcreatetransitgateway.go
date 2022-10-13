package operations

type PostCreateTransitGatewayActionEnum string

const (
	PostCreateTransitGatewayActionEnumCreateTransitGateway PostCreateTransitGatewayActionEnum = "CreateTransitGateway"
)

type PostCreateTransitGatewayVersionEnum string

const (
	PostCreateTransitGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateTransitGatewayVersionEnum = "2016-11-15"
)

type PostCreateTransitGatewayQueryParams struct {
	Action  PostCreateTransitGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateTransitGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateTransitGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateTransitGatewayRequest struct {
	QueryParams PostCreateTransitGatewayQueryParams
	Headers     PostCreateTransitGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateTransitGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
