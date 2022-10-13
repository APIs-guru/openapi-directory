package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDevEndpointXAmzTargetEnum string

const (
	CreateDevEndpointXAmzTargetEnumAwsGlueCreateDevEndpoint CreateDevEndpointXAmzTargetEnum = "AWSGlue.CreateDevEndpoint"
)

type CreateDevEndpointHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDevEndpointXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateDevEndpointRequest struct {
	Headers CreateDevEndpointHeaders
	Request shared.CreateDevEndpointRequest `request:"mediaType=application/json"`
}

type CreateDevEndpointResponse struct {
	AccessDeniedException                *interface{}
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateDevEndpointResponse            *shared.CreateDevEndpointResponse
	IdempotentParameterMismatchException *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
	ValidationException                  *interface{}
}
