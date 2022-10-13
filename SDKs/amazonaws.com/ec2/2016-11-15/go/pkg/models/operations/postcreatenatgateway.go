package operations

type PostCreateNatGatewayActionEnum string

const (
	PostCreateNatGatewayActionEnumCreateNatGateway PostCreateNatGatewayActionEnum = "CreateNatGateway"
)

type PostCreateNatGatewayVersionEnum string

const (
	PostCreateNatGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateNatGatewayVersionEnum = "2016-11-15"
)

type PostCreateNatGatewayQueryParams struct {
	Action  PostCreateNatGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateNatGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateNatGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateNatGatewayRequest struct {
	QueryParams PostCreateNatGatewayQueryParams
	Headers     PostCreateNatGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateNatGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
