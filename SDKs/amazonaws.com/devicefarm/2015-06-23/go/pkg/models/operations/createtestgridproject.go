package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTestGridProjectXAmzTargetEnum string

const (
	CreateTestGridProjectXAmzTargetEnumDeviceFarm20150623CreateTestGridProject CreateTestGridProjectXAmzTargetEnum = "DeviceFarm_20150623.CreateTestGridProject"
)

type CreateTestGridProjectHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTestGridProjectXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTestGridProjectRequest struct {
	Headers CreateTestGridProjectHeaders
	Request shared.CreateTestGridProjectRequest `request:"mediaType=application/json"`
}

type CreateTestGridProjectResponse struct {
	ArgumentException           *interface{}
	ContentType                 string
	CreateTestGridProjectResult *shared.CreateTestGridProjectResult
	InternalServiceException    *interface{}
	LimitExceededException      *interface{}
	StatusCode                  int64
}
