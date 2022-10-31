package operations

type PostRunInstancesActionEnum string

const (
	PostRunInstancesActionEnumRunInstances PostRunInstancesActionEnum = "RunInstances"
)

type PostRunInstancesVersionEnum string

const (
	PostRunInstancesVersionEnumTwoThousandAndSixteen1115 PostRunInstancesVersionEnum = "2016-11-15"
)

type PostRunInstancesQueryParams struct {
	Action  PostRunInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRunInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRunInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRunInstancesRequest struct {
	QueryParams PostRunInstancesQueryParams
	Headers     PostRunInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRunInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
