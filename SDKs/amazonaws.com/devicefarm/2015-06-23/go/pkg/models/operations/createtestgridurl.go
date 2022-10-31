package operations

import (
	"openapi/pkg/models/shared"
)

type CreateTestGridURLXAmzTargetEnum string

const (
	CreateTestGridURLXAmzTargetEnumDeviceFarm20150623CreateTestGridURL CreateTestGridURLXAmzTargetEnum = "DeviceFarm_20150623.CreateTestGridUrl"
)

type CreateTestGridURLHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateTestGridURLXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateTestGridURLRequest struct {
	Headers CreateTestGridURLHeaders
	Request shared.CreateTestGridURLRequest `request:"mediaType=application/json"`
}

type CreateTestGridURLResponse struct {
	ArgumentException        *interface{}
	ContentType              string
	CreateTestGridURLResult  *shared.CreateTestGridURLResult
	InternalServiceException *interface{}
	NotFoundException        *interface{}
	StatusCode               int64
}
