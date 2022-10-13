package operations

type PostDescribeRouteTablesActionEnum string

const (
	PostDescribeRouteTablesActionEnumDescribeRouteTables PostDescribeRouteTablesActionEnum = "DescribeRouteTables"
)

type PostDescribeRouteTablesVersionEnum string

const (
	PostDescribeRouteTablesVersionEnumTwoThousandAndSixteen1115 PostDescribeRouteTablesVersionEnum = "2016-11-15"
)

type PostDescribeRouteTablesQueryParams struct {
	Action     PostDescribeRouteTablesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                            `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeRouteTablesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeRouteTablesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeRouteTablesRequest struct {
	QueryParams PostDescribeRouteTablesQueryParams
	Headers     PostDescribeRouteTablesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeRouteTablesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
