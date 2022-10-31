package operations

import (
	"openapi/pkg/models/shared"
)

type ListRemoteAccessSessionsXAmzTargetEnum string

const (
	ListRemoteAccessSessionsXAmzTargetEnumDeviceFarm20150623ListRemoteAccessSessions ListRemoteAccessSessionsXAmzTargetEnum = "DeviceFarm_20150623.ListRemoteAccessSessions"
)

type ListRemoteAccessSessionsHeaders struct {
	XAmzAlgorithm     *string                                `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRemoteAccessSessionsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRemoteAccessSessionsRequest struct {
	Headers ListRemoteAccessSessionsHeaders
	Request shared.ListRemoteAccessSessionsRequest `request:"mediaType=application/json"`
}

type ListRemoteAccessSessionsResponse struct {
	ArgumentException              *interface{}
	ContentType                    string
	LimitExceededException         *interface{}
	ListRemoteAccessSessionsResult *shared.ListRemoteAccessSessionsResult
	NotFoundException              *interface{}
	ServiceAccountException        *interface{}
	StatusCode                     int64
}
