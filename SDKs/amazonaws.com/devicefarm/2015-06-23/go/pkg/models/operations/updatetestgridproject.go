package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateTestGridProjectXAmzTargetEnum string

const (
	UpdateTestGridProjectXAmzTargetEnumDeviceFarm20150623UpdateTestGridProject UpdateTestGridProjectXAmzTargetEnum = "DeviceFarm_20150623.UpdateTestGridProject"
)

type UpdateTestGridProjectHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateTestGridProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateTestGridProjectRequest struct {
	Headers UpdateTestGridProjectHeaders
	Request shared.UpdateTestGridProjectRequest `request:"mediaType=application/json"`
}

type UpdateTestGridProjectResponse struct {
	ArgumentException           *interface{}
	ContentType                 string
	InternalServiceException    *interface{}
	LimitExceededException      *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
	UpdateTestGridProjectResult *shared.UpdateTestGridProjectResult
}
