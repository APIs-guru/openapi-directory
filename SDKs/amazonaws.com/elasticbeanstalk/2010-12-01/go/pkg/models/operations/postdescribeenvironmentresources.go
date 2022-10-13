package operations

type PostDescribeEnvironmentResourcesActionEnum string

const (
	PostDescribeEnvironmentResourcesActionEnumDescribeEnvironmentResources PostDescribeEnvironmentResourcesActionEnum = "DescribeEnvironmentResources"
)

type PostDescribeEnvironmentResourcesVersionEnum string

const (
	PostDescribeEnvironmentResourcesVersionEnumTwoThousandAndTen1201 PostDescribeEnvironmentResourcesVersionEnum = "2010-12-01"
)

type PostDescribeEnvironmentResourcesQueryParams struct {
	Action  PostDescribeEnvironmentResourcesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeEnvironmentResourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeEnvironmentResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeEnvironmentResourcesRequest struct {
	QueryParams PostDescribeEnvironmentResourcesQueryParams
	Headers     PostDescribeEnvironmentResourcesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeEnvironmentResourcesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
