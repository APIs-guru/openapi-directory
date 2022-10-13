package operations

type GetTerminateInstancesActionEnum string

const (
	GetTerminateInstancesActionEnumTerminateInstances GetTerminateInstancesActionEnum = "TerminateInstances"
)

type GetTerminateInstancesVersionEnum string

const (
	GetTerminateInstancesVersionEnumTwoThousandAndSixteen1115 GetTerminateInstancesVersionEnum = "2016-11-15"
)

type GetTerminateInstancesQueryParams struct {
	Action     GetTerminateInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                            `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID []string                         `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetTerminateInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTerminateInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTerminateInstancesRequest struct {
	QueryParams GetTerminateInstancesQueryParams
	Headers     GetTerminateInstancesHeaders
}

type GetTerminateInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
