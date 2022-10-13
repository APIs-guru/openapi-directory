package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteProjectXAmzTargetEnum string

const (
	DeleteProjectXAmzTargetEnumDeviceFarm20150623DeleteProject DeleteProjectXAmzTargetEnum = "DeviceFarm_20150623.DeleteProject"
)

type DeleteProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteProjectRequest struct {
	Headers DeleteProjectHeaders
	Request shared.DeleteProjectRequest `request:"mediaType=application/json"`
}

type DeleteProjectResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	DeleteProjectResult     map[string]interface{}
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
