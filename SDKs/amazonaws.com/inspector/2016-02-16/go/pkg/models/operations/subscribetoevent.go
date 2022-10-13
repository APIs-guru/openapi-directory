package operations

import (
	"openapi/pkg/models/shared"
)

type SubscribeToEventXAmzTargetEnum string

const (
	SubscribeToEventXAmzTargetEnumInspectorServiceSubscribeToEvent SubscribeToEventXAmzTargetEnum = "InspectorService.SubscribeToEvent"
)

type SubscribeToEventHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SubscribeToEventXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SubscribeToEventRequest struct {
	Headers SubscribeToEventHeaders
	Request shared.SubscribeToEventRequest `request:"mediaType=application/json"`
}

type SubscribeToEventResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	LimitExceededException                 *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
