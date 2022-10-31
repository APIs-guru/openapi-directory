package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAPIDestinationXAmzTargetEnum string

const (
	UpdateAPIDestinationXAmzTargetEnumAwsEventsUpdateAPIDestination UpdateAPIDestinationXAmzTargetEnum = "AWSEvents.UpdateApiDestination"
)

type UpdateAPIDestinationHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAPIDestinationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateAPIDestinationRequest struct {
	Headers UpdateAPIDestinationHeaders
	Request shared.UpdateAPIDestinationRequest `request:"mediaType=application/json"`
}

type UpdateAPIDestinationResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	LimitExceededException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateAPIDestinationResponse    *shared.UpdateAPIDestinationResponse
}
