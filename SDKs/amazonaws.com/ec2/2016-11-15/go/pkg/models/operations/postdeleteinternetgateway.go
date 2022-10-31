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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
