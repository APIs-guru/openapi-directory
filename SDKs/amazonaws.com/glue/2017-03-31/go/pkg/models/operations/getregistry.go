package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegistryXAmzTargetEnum string

const (
	GetRegistryXAmzTargetEnumAwsGlueGetRegistry GetRegistryXAmzTargetEnum = "AWSGlue.GetRegistry"
)

type GetRegistryHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegistryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetRegistryRequest struct {
	Headers GetRegistryHeaders
	Request shared.GetRegistryInput `request:"mediaType=application/json"`
}

type GetRegistryResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	EntityNotFoundException  *interface{}
	GetRegistryResponse      *shared.GetRegistryResponse
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	StatusCode               int64
}
