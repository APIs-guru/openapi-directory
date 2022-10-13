package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAPIDestinationXAmzTargetEnum string

const (
	DeleteAPIDestinationXAmzTargetEnumAwsEventsDeleteAPIDestination DeleteAPIDestinationXAmzTargetEnum = "AWSEvents.DeleteApiDestination"
)

type DeleteAPIDestinationHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAPIDestinationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteAPIDestinationRequest struct {
	Headers DeleteAPIDestinationHeaders
	Request shared.DeleteAPIDestinationRequest `request:"mediaType=application/json"`
}

type DeleteAPIDestinationResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteAPIDestinationResponse    map[string]interface{}
	InternalException               *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
