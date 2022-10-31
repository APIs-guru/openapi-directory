package operations

type PostDeleteCustomerGatewayActionEnum string

const (
	PostDeleteCustomerGatewayActionEnumDeleteCustomerGateway PostDeleteCustomerGatewayActionEnum = "DeleteCustomerGateway"
)

type PostDeleteCustomerGatewayVersionEnum string

const (
	PostDeleteCustomerGatewayVersionEnumTwoThousandAndSixteen1115 PostDeleteCustomerGatewayVersionEnum = "2016-11-15"
)

type PostDeleteCustomerGatewayQueryParams struct {
	Action  PostDeleteCustomerGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteCustomerGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteCustomerGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteCustomerGatewayRequest struct {
	QueryParams PostDeleteCustomerGatewayQueryParams
	Headers     PostDeleteCustomerGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteCustomerGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
