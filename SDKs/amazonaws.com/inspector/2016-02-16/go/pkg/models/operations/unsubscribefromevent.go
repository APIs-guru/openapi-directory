package operations

import (
	"openapi/pkg/models/shared"
)

type UnsubscribeFromEventXAmzTargetEnum string

const (
	UnsubscribeFromEventXAmzTargetEnumInspectorServiceUnsubscribeFromEvent UnsubscribeFromEventXAmzTargetEnum = "InspectorService.UnsubscribeFromEvent"
)

type UnsubscribeFromEventHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnsubscribeFromEventXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UnsubscribeFromEventRequest struct {
	Headers UnsubscribeFromEventHeaders
	Request shared.UnsubscribeFromEventRequest `request:"mediaType=application/json"`
}

type UnsubscribeFromEventResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalException                      *interface{}
	InvalidInputException                  *interface{}
	NoSuchEntityException                  *interface{}
	ServiceTemporarilyUnavailableException *interface{}
	StatusCode                             int64
}
