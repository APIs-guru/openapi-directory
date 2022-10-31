package operations

type PostCreateEgressOnlyInternetGatewayActionEnum string

const (
	PostCreateEgressOnlyInternetGatewayActionEnumCreateEgressOnlyInternetGateway PostCreateEgressOnlyInternetGatewayActionEnum = "CreateEgressOnlyInternetGateway"
)

type PostCreateEgressOnlyInternetGatewayVersionEnum string

const (
	PostCreateEgressOnlyInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateEgressOnlyInternetGatewayVersionEnum = "2016-11-15"
)

type PostCreateEgressOnlyInternetGatewayQueryParams struct {
	Action  PostCreateEgressOnlyInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateEgressOnlyInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateEgressOnlyInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateEgressOnlyInternetGatewayRequest struct {
	QueryParams PostCreateEgressOnlyInternetGatewayQueryParams
	Headers     PostCreateEgressOnlyInternetGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateEgressOnlyInternetGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
