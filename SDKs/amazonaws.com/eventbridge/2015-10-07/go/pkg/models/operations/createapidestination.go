package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAPIDestinationXAmzTargetEnum string

const (
	CreateAPIDestinationXAmzTargetEnumAwsEventsCreateAPIDestination CreateAPIDestinationXAmzTargetEnum = "AWSEvents.CreateApiDestination"
)

type CreateAPIDestinationHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAPIDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateAPIDestinationRequest struct {
	Headers CreateAPIDestinationHeaders
	Request shared.CreateAPIDestinationRequest `request:"mediaType=application/json"`
}

type CreateAPIDestinationResponse struct {
	ContentType                    string
	CreateAPIDestinationResponse   *shared.CreateAPIDestinationResponse
	InternalException              *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
}
