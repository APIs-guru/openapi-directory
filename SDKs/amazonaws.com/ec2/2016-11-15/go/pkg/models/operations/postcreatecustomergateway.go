package operations

type PostCreateCustomerGatewayActionEnum string

const (
	PostCreateCustomerGatewayActionEnumCreateCustomerGateway PostCreateCustomerGatewayActionEnum = "CreateCustomerGateway"
)

type PostCreateCustomerGatewayVersionEnum string

const (
	PostCreateCustomerGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateCustomerGatewayVersionEnum = "2016-11-15"
)

type PostCreateCustomerGatewayQueryParams struct {
	Action  PostCreateCustomerGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCustomerGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCustomerGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateCustomerGatewayRequest struct {
	QueryParams PostCreateCustomerGatewayQueryParams
	Headers     PostCreateCustomerGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCustomerGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
