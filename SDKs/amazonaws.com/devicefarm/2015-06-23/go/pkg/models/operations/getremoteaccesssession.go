package operations

import (
	"openapi/pkg/models/shared"
)

type GetRemoteAccessSessionXAmzTargetEnum string

const (
	GetRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623GetRemoteAccessSession GetRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.GetRemoteAccessSession"
)

type GetRemoteAccessSessionHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRemoteAccessSessionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRemoteAccessSessionRequest struct {
	Headers GetRemoteAccessSessionHeaders
	Request shared.GetRemoteAccessSessionRequest `request:"mediaType=application/json"`
}

type GetRemoteAccessSessionResponse struct {
	ArgumentException            *interface{}
	ContentType                  string
	GetRemoteAccessSessionResult *shared.GetRemoteAccessSessionResult
	LimitExceededException       *interface{}
	NotFoundException            *interface{}
	ServiceAccountException      *interface{}
	StatusCode                   int64
}
