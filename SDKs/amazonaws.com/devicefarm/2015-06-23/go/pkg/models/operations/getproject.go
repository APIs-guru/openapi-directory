package operations

import (
	"openapi/pkg/models/shared"
)

type GetProjectXAmzTargetEnum string

const (
	GetProjectXAmzTargetEnumDeviceFarm20150623GetProject GetProjectXAmzTargetEnum = "DeviceFarm_20150623.GetProject"
)

type GetProjectHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetProjectRequest struct {
	Headers GetProjectHeaders
	Request shared.GetProjectRequest `request:"mediaType=application/json"`
}

type GetProjectResponse struct {
	ArgumentException       *interface{}
	ContentType             string
	GetProjectResult        *shared.GetProjectResult
	LimitExceededException  *interface{}
	NotFoundException       *interface{}
	ServiceAccountException *interface{}
	StatusCode              int64
}
