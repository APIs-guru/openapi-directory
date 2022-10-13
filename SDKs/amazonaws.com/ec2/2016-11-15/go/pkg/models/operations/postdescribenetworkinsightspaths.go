package operations

type PostDescribeNetworkInsightsPathsActionEnum string

const (
	PostDescribeNetworkInsightsPathsActionEnumDescribeNetworkInsightsPaths PostDescribeNetworkInsightsPathsActionEnum = "DescribeNetworkInsightsPaths"
)

type PostDescribeNetworkInsightsPathsVersionEnum string

const (
	PostDescribeNetworkInsightsPathsVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInsightsPathsVersionEnum = "2016-11-15"
)

type PostDescribeNetworkInsightsPathsQueryParams struct {
	Action     PostDescribeNetworkInsightsPathsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                     `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                     `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNetworkInsightsPathsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNetworkInsightsPathsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeNetworkInsightsPathsRequest struct {
	QueryParams PostDescribeNetworkInsightsPathsQueryParams
	Headers     PostDescribeNetworkInsightsPathsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNetworkInsightsPathsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
