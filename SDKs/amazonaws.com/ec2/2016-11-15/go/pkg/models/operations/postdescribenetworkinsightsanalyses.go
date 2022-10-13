package operations

type PostDescribeNetworkInsightsAnalysesActionEnum string

const (
	PostDescribeNetworkInsightsAnalysesActionEnumDescribeNetworkInsightsAnalyses PostDescribeNetworkInsightsAnalysesActionEnum = "DescribeNetworkInsightsAnalyses"
)

type PostDescribeNetworkInsightsAnalysesVersionEnum string

const (
	PostDescribeNetworkInsightsAnalysesVersionEnumTwoThousandAndSixteen1115 PostDescribeNetworkInsightsAnalysesVersionEnum = "2016-11-15"
)

type PostDescribeNetworkInsightsAnalysesQueryParams struct {
	Action     PostDescribeNetworkInsightsAnalysesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                                        `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                                        `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeNetworkInsightsAnalysesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNetworkInsightsAnalysesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeNetworkInsightsAnalysesRequest struct {
	QueryParams PostDescribeNetworkInsightsAnalysesQueryParams
	Headers     PostDescribeNetworkInsightsAnalysesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNetworkInsightsAnalysesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
