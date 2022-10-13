package operations

type PostDeleteEgressOnlyInternetGatewayActionEnum string

const (
	PostDeleteEgressOnlyInternetGatewayActionEnumDeleteEgressOnlyInternetGateway PostDeleteEgressOnlyInternetGatewayActionEnum = "DeleteEgressOnlyInternetGateway"
)

type PostDeleteEgressOnlyInternetGatewayVersionEnum string

const (
	PostDeleteEgressOnlyInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteEgressOnlyInternetGatewayVersionEnum = "2016-11-15"
)

type PostDeleteEgressOnlyInternetGatewayQueryParams struct {
	Action  PostDeleteEgressOnlyInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteEgressOnlyInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteEgressOnlyInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteEgressOnlyInternetGatewayRequest struct {
	QueryParams PostDeleteEgressOnlyInternetGatewayQueryParams
	Headers     PostDeleteEgressOnlyInternetGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteEgressOnlyInternetGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
