package operations

type PostCreateVpnGatewayActionEnum string

const (
	PostCreateVpnGatewayActionEnumCreateVpnGateway PostCreateVpnGatewayActionEnum = "CreateVpnGateway"
)

type PostCreateVpnGatewayVersionEnum string

const (
	PostCreateVpnGatewayVersionEnumTwoThousandAndSixteen1115 PostCreateVpnGatewayVersionEnum = "2016-11-15"
)

type PostCreateVpnGatewayQueryParams struct {
	Action  PostCreateVpnGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateVpnGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateVpnGatewayRequest struct {
	QueryParams PostCreateVpnGatewayQueryParams
	Headers     PostCreateVpnGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateVpnGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
