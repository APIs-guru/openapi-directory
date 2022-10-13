package operations

type GetDescribeApplicationsActionEnum string

const (
	GetDescribeApplicationsActionEnumDescribeApplications GetDescribeApplicationsActionEnum = "DescribeApplications"
)

type GetDescribeApplicationsVersionEnum string

const (
	GetDescribeApplicationsVersionEnumTwoThousandAndTen1201 GetDescribeApplicationsVersionEnum = "2010-12-01"
)

type GetDescribeApplicationsQueryParams struct {
	Action           GetDescribeApplicationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ApplicationNames []string                           `queryParam:"style=form,explode=true,name=ApplicationNames"`
	Version          GetDescribeApplicationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeApplicationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeApplicationsRequest struct {
	QueryParams GetDescribeApplicationsQueryParams
	Headers     GetDescribeApplicationsHeaders
}

type GetDescribeApplicationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
