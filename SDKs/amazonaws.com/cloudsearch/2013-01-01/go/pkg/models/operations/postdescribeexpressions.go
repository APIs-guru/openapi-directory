package operations

type PostDescribeExpressionsActionEnum string

const (
	PostDescribeExpressionsActionEnumDescribeExpressions PostDescribeExpressionsActionEnum = "DescribeExpressions"
)

type PostDescribeExpressionsVersionEnum string

const (
	PostDescribeExpressionsVersionEnumTwoThousandAndThirteen0101 PostDescribeExpressionsVersionEnum = "2013-01-01"
)

type PostDescribeExpressionsQueryParams struct {
	Action  PostDescribeExpressionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeExpressionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeExpressionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeExpressionsRequest struct {
	QueryParams PostDescribeExpressionsQueryParams
	Headers     PostDescribeExpressionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeExpressionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
