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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
