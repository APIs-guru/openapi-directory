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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
