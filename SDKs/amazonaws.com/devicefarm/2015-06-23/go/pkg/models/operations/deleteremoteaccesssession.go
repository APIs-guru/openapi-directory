package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRemoteAccessSessionXAmzTargetEnum string

const (
	DeleteRemoteAccessSessionXAmzTargetEnumDeviceFarm20150623DeleteRemoteAccessSession DeleteRemoteAccessSessionXAmzTargetEnum = "DeviceFarm_20150623.DeleteRemoteAccessSession"
)

type DeleteRemoteAccessSessionHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRemoteAccessSessionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteRemoteAccessSessionRequest struct {
	Headers DeleteRemoteAccessSessionHeaders
	Request shared.DeleteRemoteAccessSessionRequest `request:"mediaType=application/json"`
}

type DeleteRemoteAccessSessionResponse struct {
	ArgumentException               *interface{}
	ContentType                     string
	DeleteRemoteAccessSessionResult map[string]interface{}
	LimitExceededException          *interface{}
	NotFoundException               *interface{}
	ServiceAccountException         *interface{}
	StatusCode                      int64
}
