package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstanceProfileXAmzTargetEnum string

const (
	CreateInstanceProfileXAmzTargetEnumDeviceFarm20150623CreateInstanceProfile CreateInstanceProfileXAmzTargetEnum = "DeviceFarm_20150623.CreateInstanceProfile"
)

type CreateInstanceProfileHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstanceProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateInstanceProfileRequest struct {
	Headers CreateInstanceProfileHeaders
	Request shared.CreateInstanceProfileRequest `request:"mediaType=application/json"`
}

type CreateInstanceProfileResponse struct {
	ArgumentException           *interface{}
	ContentType                 string
	CreateInstanceProfileResult *shared.CreateInstanceProfileResult
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	ServiceAccountException     *interface{}
	StatusCode                  int64
}
