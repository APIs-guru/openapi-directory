package operations

type PostDescribeApplicationVersionsActionEnum string

const (
	PostDescribeApplicationVersionsActionEnumDescribeApplicationVersions PostDescribeApplicationVersionsActionEnum = "DescribeApplicationVersions"
)

type PostDescribeApplicationVersionsVersionEnum string

const (
	PostDescribeApplicationVersionsVersionEnumTwoThousandAndTen1201 PostDescribeApplicationVersionsVersionEnum = "2010-12-01"
)

type PostDescribeApplicationVersionsQueryParams struct {
	Action  PostDescribeApplicationVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeApplicationVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeApplicationVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeApplicationVersionsRequest struct {
	QueryParams PostDescribeApplicationVersionsQueryParams
	Headers     PostDescribeApplicationVersionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeApplicationVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
