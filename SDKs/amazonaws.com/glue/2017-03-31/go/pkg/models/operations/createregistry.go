package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRegistryXAmzTargetEnum string

const (
	CreateRegistryXAmzTargetEnumAwsGlueCreateRegistry CreateRegistryXAmzTargetEnum = "AWSGlue.CreateRegistry"
)

type CreateRegistryHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRegistryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRegistryRequest struct {
	Headers CreateRegistryHeaders
	Request shared.CreateRegistryInput `request:"mediaType=application/json"`
}

type CreateRegistryResponse struct {
	AccessDeniedException                *interface{}
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateRegistryResponse               *shared.CreateRegistryResponse
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
