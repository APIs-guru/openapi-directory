package operations

type PostDeleteInternetGatewayActionEnum string

const (
	PostDeleteInternetGatewayActionEnumDeleteInternetGateway PostDeleteInternetGatewayActionEnum = "DeleteInternetGateway"
)

type PostDeleteInternetGatewayVersionEnum string

const (
	PostDeleteInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteInternetGatewayVersionEnum = "2016-11-15"
)

type PostDeleteInternetGatewayQueryParams struct {
	Action  PostDeleteInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteInternetGatewayRequest struct {
	QueryParams PostDeleteInternetGatewayQueryParams
	Headers     PostDeleteInternetGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteInternetGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
