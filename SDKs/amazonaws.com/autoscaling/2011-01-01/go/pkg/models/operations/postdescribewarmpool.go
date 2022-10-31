package operations

type PostDescribeWarmPoolActionEnum string

const (
	PostDescribeWarmPoolActionEnumDescribeWarmPool PostDescribeWarmPoolActionEnum = "DescribeWarmPool"
)

type PostDescribeWarmPoolVersionEnum string

const (
	PostDescribeWarmPoolVersionEnumTwoThousandAndEleven0101 PostDescribeWarmPoolVersionEnum = "2011-01-01"
)

type PostDescribeWarmPoolQueryParams struct {
	Action  PostDescribeWarmPoolActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeWarmPoolVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeWarmPoolHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeWarmPoolRequest struct {
	QueryParams PostDescribeWarmPoolQueryParams
	Headers     PostDescribeWarmPoolHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeWarmPoolResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
