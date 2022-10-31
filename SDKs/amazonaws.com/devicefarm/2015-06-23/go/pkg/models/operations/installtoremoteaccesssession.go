package operations

import (
	"openapi/pkg/models/shared"
)

type InstallToRemoteAccessSessionXAmzTargetEnum string

const (
	InstallToRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623InstallToRemoteAccessSession InstallToRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.InstallToRemoteAccessSession"
)

type InstallToRemoteAccessSessionHeaders struct {
	XAmzAlgorithm     *string                                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        InstallToRemoteAccessSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
