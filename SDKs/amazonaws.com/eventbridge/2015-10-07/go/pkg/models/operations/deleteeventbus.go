package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteEventBusXAmzTargetEnum string

const (
	DeleteEventBusXAmzTargetEnumAwsEventsDeleteEventBus DeleteEventBusXAmzTargetEnum = "AWSEvents.DeleteEventBus"
)

type DeleteEventBusHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteEventBusXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteEventBusRequest struct {
	Headers DeleteEventBusHeaders
	Request shared.DeleteEventBusRequest `request:"mediaType=application/json"`
}

type DeleteEventBusResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	StatusCode                      int64
}
