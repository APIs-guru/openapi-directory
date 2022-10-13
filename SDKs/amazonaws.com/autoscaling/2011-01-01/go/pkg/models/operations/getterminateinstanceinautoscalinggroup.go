package operations

type GetTerminateInstanceInAutoScalingGroupActionEnum string

const (
	GetTerminateInstanceInAutoScalingGroupActionEnumTerminateInstanceInAutoScalingGroup GetTerminateInstanceInAutoScalingGroupActionEnum = "TerminateInstanceInAutoScalingGroup"
)

type GetTerminateInstanceInAutoScalingGroupVersionEnum string

const (
	GetTerminateInstanceInAutoScalingGroupVersionEnumTwoThousandAndEleven0101 GetTerminateInstanceInAutoScalingGroupVersionEnum = "2011-01-01"
)

type GetTerminateInstanceInAutoScalingGroupQueryParams struct {
	Action                         GetTerminateInstanceInAutoScalingGroupActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	InstanceID                     string                                            `queryParam:"style=form,explode=true,name=InstanceId"`
	ShouldDecrementDesiredCapacity bool                                              `queryParam:"style=form,explode=true,name=ShouldDecrementDesiredCapacity"`
	Version                        GetTerminateInstanceInAutoScalingGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTerminateInstanceInAutoScalingGroupHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTerminateInstanceInAutoScalingGroupRequest struct {
	QueryParams GetTerminateInstanceInAutoScalingGroupQueryParams
	Headers     GetTerminateInstanceInAutoScalingGroupHeaders
}

type GetTerminateInstanceInAutoScalingGroupResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
