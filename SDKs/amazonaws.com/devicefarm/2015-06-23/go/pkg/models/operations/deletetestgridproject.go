package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTestGridProjectXAmzTargetEnum string

const (
	DeleteTestGridProjectXAmzTargetEnumDeviceFarm20150623DeleteTestGridProject DeleteTestGridProjectXAmzTargetEnum = "DeviceFarm_20150623.DeleteTestGridProject"
)

type DeleteTestGridProjectHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTestGridProjectXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteTestGridProjectRequest struct {
	Headers DeleteTestGridProjectHeaders
	Request shared.DeleteTestGridProjectRequest `request:"mediaType=application/json"`
}

type DeleteTestGridProjectResponse struct {
	ArgumentException           *interface{}
	CannotDeleteException       *interface{}
	ContentType                 string
	DeleteTestGridProjectResult map[string]interface{}
	InternalServiceException    *interface{}
	NotFoundException           *interface{}
	StatusCode                  int64
}
