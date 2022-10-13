package operations

type GetMonitorInstancesActionEnum string

const (
	GetMonitorInstancesActionEnumMonitorInstances GetMonitorInstancesActionEnum = "MonitorInstances"
)

type GetMonitorInstancesVersionEnum string

const (
	GetMonitorInstancesVersionEnumTwoThousandAndSixteen1115 GetMonitorInstancesVersionEnum = "2016-11-15"
)

type GetMonitorInstancesQueryParams struct {
	Action     GetMonitorInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                          `queryParam:"style=form,explode=true,name=DryRun"`
	InstanceID []string                       `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetMonitorInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetMonitorInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetMonitorInstancesRequest struct {
	QueryParams GetMonitorInstancesQueryParams
	Headers     GetMonitorInstancesHeaders
}

type GetMonitorInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
