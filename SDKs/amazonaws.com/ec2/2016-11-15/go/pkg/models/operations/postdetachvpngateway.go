package operations

type PostDetachVpnGatewayActionEnum string

const (
	PostDetachVpnGatewayActionEnumDetachVpnGateway PostDetachVpnGatewayActionEnum = "DetachVpnGateway"
)

type PostDetachVpnGatewayVersionEnum string

const (
	PostDetachVpnGatewayVersionEnumTwoThousandAndSixteen1115 PostDetachVpnGatewayVersionEnum = "2016-11-15"
)

type PostDetachVpnGatewayQueryParams struct {
	Action  PostDetachVpnGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDetachVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDetachVpnGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDetachVpnGatewayRequest struct {
	QueryParams PostDetachVpnGatewayQueryParams
	Headers     PostDetachVpnGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDetachVpnGatewayResponse struct {
	ContentType string
	StatusCode  int64
}
