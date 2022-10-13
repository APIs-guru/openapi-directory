package operations

import (
	"openapi/pkg/models/shared"
)

type InstallToRemoteAccessSessionXAmzTargetEnum string

const (
	InstallToRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623InstallToRemoteAccessSession InstallToRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.InstallToRemoteAccessSession"
)

type InstallToRemoteAccessSessionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        InstallToRemoteAccessSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type InstallToRemoteAccessSessionRequest struct {
	Headers InstallToRemoteAccessSessionHeaders
	Request shared.InstallToRemoteAccessSessionRequest `request:"mediaType=application/json"`
}

type InstallToRemoteAccessSessionResponse struct {
	ArgumentException                  *interface{}
	ContentType                        string
	InstallToRemoteAccessSessionResult *shared.InstallToRemoteAccessSessionResult
	LimitExceededException             *interface{}
	NotFoundException                  *interface{}
	ServiceAccountException            *interface{}
	StatusCode                         int64
}
