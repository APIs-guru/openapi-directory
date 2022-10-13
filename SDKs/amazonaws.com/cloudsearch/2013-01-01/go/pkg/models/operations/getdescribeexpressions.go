package operations

type GetDescribeExpressionsActionEnum string

const (
	GetDescribeExpressionsActionEnumDescribeExpressions GetDescribeExpressionsActionEnum = "DescribeExpressions"
)

type GetDescribeExpressionsVersionEnum string

const (
	GetDescribeExpressionsVersionEnumTwoThousandAndThirteen0101 GetDescribeExpressionsVersionEnum = "2013-01-01"
)

type GetDescribeExpressionsQueryParams struct {
	Action          GetDescribeExpressionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Deployed        *bool                             `queryParam:"style=form,explode=true,name=Deployed"`
	DomainName      string                            `queryParam:"style=form,explode=true,name=DomainName"`
	ExpressionNames []string                          `queryParam:"style=form,explode=true,name=ExpressionNames"`
	Version         GetDescribeExpressionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeExpressionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeExpressionsRequest struct {
	QueryParams GetDescribeExpressionsQueryParams
	Headers     GetDescribeExpressionsHeaders
}

type GetDescribeExpressionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
