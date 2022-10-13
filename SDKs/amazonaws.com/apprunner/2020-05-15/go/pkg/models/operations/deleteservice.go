package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteServiceXAmzTargetEnum string

const (
	DeleteServiceXAmzTargetEnumAppRunnerDeleteService DeleteServiceXAmzTargetEnum = "AppRunner.DeleteService"
)

type DeleteServiceHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteServiceRequest struct {
	Headers DeleteServiceHeaders
	Request shared.DeleteServiceRequest `request:"mediaType=application/json"`
}

type DeleteServiceResponse struct {
	ContentType                   string
	DeleteServiceResponse         *shared.DeleteServiceResponse
	InternalServiceErrorException *interface{}
	InvalidRequestException       *interface{}
	InvalidStateException         *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
}
