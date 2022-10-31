package operations

type PostRunScheduledInstancesActionEnum string

const (
	PostRunScheduledInstancesActionEnumRunScheduledInstances PostRunScheduledInstancesActionEnum = "RunScheduledInstances"
)

type PostRunScheduledInstancesVersionEnum string

const (
	PostRunScheduledInstancesVersionEnumTwoThousandAndSixteen1115 PostRunScheduledInstancesVersionEnum = "2016-11-15"
)

type PostRunScheduledInstancesQueryParams struct {
	Action  PostRunScheduledInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRunScheduledInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRunScheduledInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostRunScheduledInstancesRequest struct {
	QueryParams PostRunScheduledInstancesQueryParams
	Headers     PostRunScheduledInstancesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRunScheduledInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
