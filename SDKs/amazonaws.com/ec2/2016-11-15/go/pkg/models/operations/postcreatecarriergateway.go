package operations

type PostCreateCarrierGatewayActionEnum string

const (
	PostCreateCarrierGatewayActionEnumCreateCarrierGateway PostCreateCarrierGatewayActionEnum = "CreateCarrierGateway"
)

type PostCreateCarrierGatewayVersionEnum string

const (
	PostCreateCarrierGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateCarrierGatewayVersionEnum = "2016-11-15"
)

type PostCreateCarrierGatewayQueryParams struct {
	Action  PostCreateCarrierGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateCarrierGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateCarrierGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateCarrierGatewayRequest struct {
	QueryParams PostCreateCarrierGatewayQueryParams
	Headers     PostCreateCarrierGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateCarrierGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
