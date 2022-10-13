package operations

type PostDescribeApplicationsActionEnum string

const (
	PostDescribeApplicationsActionEnumDescribeApplications PostDescribeApplicationsActionEnum = "DescribeApplications"
)

type PostDescribeApplicationsVersionEnum string

const (
	PostDescribeApplicationsVersionEnumTwoThousandAndTen1201 PostDescribeApplicationsVersionEnum = "2010-12-01"
)

type PostDescribeApplicationsQueryParams struct {
	Action  PostDescribeApplicationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeApplicationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeApplicationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeApplicationsRequest struct {
	QueryParams PostDescribeApplicationsQueryParams
	Headers     PostDescribeApplicationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeApplicationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
