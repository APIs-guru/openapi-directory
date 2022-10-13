package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEventBusXAmzTargetEnum string

const (
	CreateEventBusXAmzTargetEnumAwsEventsCreateEventBus CreateEventBusXAmzTargetEnum = "AWSEvents.CreateEventBus"
)

type CreateEventBusHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateEventBusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateEventBusRequest struct {
	Headers CreateEventBusHeaders
	Request shared.CreateEventBusRequest `request:"mediaType=application/json"`
}

type CreateEventBusResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateEventBusResponse          *shared.CreateEventBusResponse
	InternalException               *interface{}
	InvalidStateException           *interface{}
	LimitExceededException          *interface{}
	OperationDisabledException      *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
