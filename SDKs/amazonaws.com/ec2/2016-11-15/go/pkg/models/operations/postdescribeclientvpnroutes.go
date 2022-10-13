package operations

type PostDescribeClientVpnRoutesActionEnum string

const (
	PostDescribeClientVpnRoutesActionEnumDescribeClientVpnRoutes PostDescribeClientVpnRoutesActionEnum = "DescribeClientVpnRoutes"
)

type PostDescribeClientVpnRoutesVersionEnum string

const (
	PostDescribeClientVpnRoutesVersionEnumTwoThousandAndSixteen1115 PostDescribeClientVpnRoutesVersionEnum = "2016-11-15"
)

type PostDescribeClientVpnRoutesQueryParams struct {
	Action     PostDescribeClientVpnRoutesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeClientVpnRoutesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClientVpnRoutesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClientVpnRoutesRequest struct {
	QueryParams PostDescribeClientVpnRoutesQueryParams
	Headers     PostDescribeClientVpnRoutesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClientVpnRoutesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
