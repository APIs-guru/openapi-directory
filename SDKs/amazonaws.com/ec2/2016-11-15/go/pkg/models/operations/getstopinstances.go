package operations

type GetStopInstancesActionEnum string

const (
	GetStopInstancesActionEnumStopInstances GetStopInstancesActionEnum = "StopInstances"
)

type GetStopInstancesVersionEnum string

const (
	GetStopInstancesVersionEnumTwoThousandAndSixteen1115 GetStopInstancesVersionEnum = "2016-11-15"
)

type GetStopInstancesQueryParams struct {
	Action     GetStopInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DryRun     *bool                       `queryParam:"style=form,explode=true,name=DryRun"`
	Force      *bool                       `queryParam:"style=form,explode=true,name=Force"`
	Hibernate  *bool                       `queryParam:"style=form,explode=true,name=Hibernate"`
	InstanceID []string                    `queryParam:"style=form,explode=true,name=InstanceId"`
	Version    GetStopInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetStopInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetStopInstancesRequest struct {
	QueryParams GetStopInstancesQueryParams
	Headers     GetStopInstancesHeaders
}

type GetStopInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
