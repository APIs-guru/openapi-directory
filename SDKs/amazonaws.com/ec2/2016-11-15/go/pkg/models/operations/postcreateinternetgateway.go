package operations

type PostCreateInternetGatewayActionEnum string

const (
	PostCreateInternetGatewayActionEnumCreateInternetGateway PostCreateInternetGatewayActionEnum = "CreateInternetGateway"
)

type PostCreateInternetGatewayVersionEnum string

const (
	PostCreateInternetGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateInternetGatewayVersionEnum = "2016-11-15"
)

type PostCreateInternetGatewayQueryParams struct {
	Action  PostCreateInternetGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateInternetGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateInternetGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateInternetGatewayRequest struct {
	QueryParams PostCreateInternetGatewayQueryParams
	Headers     PostCreateInternetGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateInternetGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
