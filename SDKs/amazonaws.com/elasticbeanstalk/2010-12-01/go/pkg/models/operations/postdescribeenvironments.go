package operations

type PostDescribeEnvironmentsActionEnum string

const (
	PostDescribeEnvironmentsActionEnumDescribeEnvironments PostDescribeEnvironmentsActionEnum = "DescribeEnvironments"
)

type PostDescribeEnvironmentsVersionEnum string

const (
	PostDescribeEnvironmentsVersionEnumTwoThousandAndTen1201 PostDescribeEnvironmentsVersionEnum = "2010-12-01"
)

type PostDescribeEnvironmentsQueryParams struct {
	Action  PostDescribeEnvironmentsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEnvironmentsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEnvironmentsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeEnvironmentsRequest struct {
	QueryParams PostDescribeEnvironmentsQueryParams
	Headers     PostDescribeEnvironmentsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEnvironmentsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
