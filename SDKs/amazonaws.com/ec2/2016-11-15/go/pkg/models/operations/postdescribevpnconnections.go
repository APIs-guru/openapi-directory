package operations

type PostDescribeVpnConnectionsActionEnum string

const (
	PostDescribeVpnConnectionsActionEnumDescribeVpnConnections PostDescribeVpnConnectionsActionEnum = "DescribeVpnConnections"
)

type PostDescribeVpnConnectionsVersionEnum string

const (
	PostDescribeVpnConnectionsVersionEnumTwoThousandAndSixteen1115 PostDescribeVpnConnectionsVersionEnum = "2016-11-15"
)

type PostDescribeVpnConnectionsQueryParams struct {
	Action  PostDescribeVpnConnectionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeVpnConnectionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeVpnConnectionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeVpnConnectionsRequest struct {
	QueryParams PostDescribeVpnConnectionsQueryParams
	Headers     PostDescribeVpnConnectionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeVpnConnectionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
