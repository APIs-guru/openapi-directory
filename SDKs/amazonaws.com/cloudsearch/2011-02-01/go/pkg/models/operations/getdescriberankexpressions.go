package operations

type GetDescribeRankExpressionsActionEnum string

const (
	GetDescribeRankExpressionsActionEnumDescribeRankExpressions GetDescribeRankExpressionsActionEnum = "DescribeRankExpressions"
)

type GetDescribeRankExpressionsVersionEnum string

const (
	GetDescribeRankExpressionsVersionEnumTwoThousandAndEleven0201 GetDescribeRankExpressionsVersionEnum = "2011-02-01"
)

type GetDescribeRankExpressionsQueryParams struct {
	Action     GetDescribeRankExpressionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DomainName string                                `queryParam:"style=form,explode=true,name=DomainName"`
	RankNames  []string                              `queryParam:"style=form,explode=true,name=RankNames"`
	Version    GetDescribeRankExpressionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeRankExpressionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeRankExpressionsRequest struct {
	QueryParams GetDescribeRankExpressionsQueryParams
	Headers     GetDescribeRankExpressionsHeaders
}

type GetDescribeRankExpressionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
