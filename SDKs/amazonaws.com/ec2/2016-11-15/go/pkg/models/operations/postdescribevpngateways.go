package operations

type PostDescribeVpnGatewaysActionEnum string

const (
	PostDescribeVpnGatewaysActionEnumDescribeVpnGateways PostDescribeVpnGatewaysActionEnum = "DescribeVpnGateways"
)

type PostDescribeVpnGatewaysVersionEnum string

const (
	PostDescribeVpnGatewaysVersionEnumTwoThousandAndSixteen1115 PostDescribeVpnGatewaysVersionEnum = "2016-11-15"
)

type PostDescribeVpnGatewaysQueryParams struct {
	Action  PostDescribeVpnGatewaysActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeVpnGatewaysVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpnGatewaysHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeVpnGatewaysRequest struct {
	QueryParams PostDescribeVpnGatewaysQueryParams
	Headers     PostDescribeVpnGatewaysHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpnGatewaysResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
