package operations

type PostDetachInternetGatewayActionEnum string

const (
	PostDetachInternetGatewayActionEnumDetachInternetGateway PostDetachInternetGatewayActionEnum = "DetachInternetGateway"
)

type PostDetachInternetGatewayVersionEnum string

const (
	PostDetachInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostDetachInternetGatewayVersionEnum = "2016-11-15"
)

type PostDetachInternetGatewayQueryParams struct {
	Action  PostDetachInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachInternetGatewayRequest struct {
	QueryParams PostDetachInternetGatewayQueryParams
	Headers     PostDetachInternetGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachInternetGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
