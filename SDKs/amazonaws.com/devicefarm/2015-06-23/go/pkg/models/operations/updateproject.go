package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateProjectXAmzTargetEnum string

const (
	UpdateProjectXAmzTargetEnumDeviceFarm20150623UpdateProject UpdateProjectXAmzTargetEnum = "DeviceFarm_20150623.UpdateProject"
)

type UpdateProjectHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateProjectRequest struct {
	Headers UpdateProjectHeaders
	Request shared.UpdateProjectRequest `request:"mediaType=application/json"`
}

type UpdateProjectResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
	UpdateProjectResult     *shared.UpdateProjectResult
}
