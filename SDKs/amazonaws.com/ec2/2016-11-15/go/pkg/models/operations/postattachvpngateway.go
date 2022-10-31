package operations

type PostAttachVpnGatewayActionEnum string

const (
	PostAttachVpnGatewayActionEnumAttachVpnGateway PostAttachVpnGatewayActionEnum = "AttachVpnGateway"
)

type PostAttachVpnGatewayVersionEnum string

const (
	PostAttachVpnGatewayVersionEnumTwoThousandAndSixteen1115 PostAttachVpnGatewayVersionEnum = "2016-11-15"
)

type PostAttachVpnGatewayQueryParams struct {
	Action  PostAttachVpnGatewayActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostAttachVpnGatewayVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostAttachVpnGatewayHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostAttachVpnGatewayRequest struct {
	QueryParams PostAttachVpnGatewayQueryParams
	Headers     PostAttachVpnGatewayHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostAttachVpnGatewayResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
