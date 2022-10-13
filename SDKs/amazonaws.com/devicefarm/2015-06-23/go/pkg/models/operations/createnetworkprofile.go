package operations

import (
	"openapi/pkg/models/shared"
)

type CreateNetworkProfileXAmzTargetEnum string

const (
	CreateNetworkProfileXAmzTargetEnumDeviceFarm20150623CreateNetworkProfile CreateNetworkProfileXAmzTargetEnum = "DeviceFarm_20150623.CreateNetworkProfile"
)

type CreateNetworkProfileHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateNetworkProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateNetworkProfileRequest struct {
	Headers CreateNetworkProfileHeaders
	Request shared.CreateNetworkProfileRequest `request:"mediaType=application/json"`
}

type CreateNetworkProfileResponse struct {
	ArgumentException          *interface{}
	ContentType                string
	CreateNetworkProfileResult *shared.CreateNetworkProfileResult
	LimitExceededException     *interface{}
	NotFoundException          *interface{}
	ServiceAccountException    *interface{}
	StatusCode                 int64
}
