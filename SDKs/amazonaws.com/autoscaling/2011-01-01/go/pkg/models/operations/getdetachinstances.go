package operations

type GetDetachInstancesActionEnum string

const (
	GetDetachInstancesActionEnumDetachInstances GetDetachInstancesActionEnum = "DetachInstances"
)

type GetDetachInstancesVersionEnum string

const (
	GetDetachInstancesVersionEnumTwoThousandAndEleven0101 GetDetachInstancesVersionEnum = "2011-01-01"
)

type GetDetachInstancesQueryParams struct {
	Action                         GetDetachInstancesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AutoScalingGroupName           string                        `queryParam:"style=form,explode=true,name=AutoScalingGroupName"`
	InstanceIds                    []string                      `queryParam:"style=form,explode=true,name=InstanceIds"`
	ShouldDecrementDesiredCapacity bool                          `queryParam:"style=form,explode=true,name=ShouldDecrementDesiredCapacity"`
	Version                        GetDetachInstancesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDetachInstancesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDetachInstancesRequest struct {
	QueryParams GetDetachInstancesQueryParams
	Headers     GetDetachInstancesHeaders
}

type GetDetachInstancesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
