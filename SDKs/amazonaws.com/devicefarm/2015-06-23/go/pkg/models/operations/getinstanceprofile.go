package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstanceProfileXAmzTargetEnum string

const (
	GetInstanceProfileXAmzTargetEnumDeviceFarm20150623GetInstanceProfile GetInstanceProfileXAmzTargetEnum = "DeviceFarm_20150623.GetInstanceProfile"
)

type GetInstanceProfileHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetInstanceProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetInstanceProfileRequest struct {
	Headers GetInstanceProfileHeaders
	Request shared.GetInstanceProfileRequest `request:"mediaType=application/json"`
}

type GetInstanceProfileResponse struct {
	ArgumentException        *interface{}
	ContentType              string
	GetInstanceProfileResult *shared.GetInstanceProfileResult
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	ServiceAccountException  *interface{}
	StatusCode               int64
}
