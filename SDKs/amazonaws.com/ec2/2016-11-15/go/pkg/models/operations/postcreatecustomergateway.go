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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
