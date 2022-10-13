package operations

type GetDescribeEnvironmentResourcesActionEnum string

const (
	GetDescribeEnvironmentResourcesActionEnumDescribeEnvironmentResources GetDescribeEnvironmentResourcesActionEnum = "DescribeEnvironmentResources"
)

type GetDescribeEnvironmentResourcesVersionEnum string

const (
	GetDescribeEnvironmentResourcesVersionEnumTwoThousandAndTen1201 GetDescribeEnvironmentResourcesVersionEnum = "2010-12-01"
)

type GetDescribeEnvironmentResourcesQueryParams struct {
	Action          GetDescribeEnvironmentResourcesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EnvironmentID   *string                                    `queryParam:"style=form,explode=true,name=EnvironmentId"`
	EnvironmentName *string                                    `queryParam:"style=form,explode=true,name=EnvironmentName"`
	Version         GetDescribeEnvironmentResourcesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEnvironmentResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEnvironmentResourcesRequest struct {
	QueryParams GetDescribeEnvironmentResourcesQueryParams
	Headers     GetDescribeEnvironmentResourcesHeaders
}

type GetDescribeEnvironmentResourcesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
