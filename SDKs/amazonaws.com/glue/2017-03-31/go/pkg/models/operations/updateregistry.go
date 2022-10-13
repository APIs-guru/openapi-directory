package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRegistryXAmzTargetEnum string

const (
	UpdateRegistryXAmzTargetEnumAwsGlueUpdateRegistry UpdateRegistryXAmzTargetEnum = "AWSGlue.UpdateRegistry"
)

type UpdateRegistryHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRegistryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRegistryRequest struct {
	Headers UpdateRegistryHeaders
	Request shared.UpdateRegistryInput `request:"mediaType=application/json"`
}

type UpdateRegistryResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	StatusCode                      int64
	UpdateRegistryResponse          *shared.UpdateRegistryResponse
}
