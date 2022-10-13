package operations

import (
	"openapi/pkg/models/shared"
)

type PutEventsXAmzTargetEnum string

const (
	PutEventsXAmzTargetEnumAwsEventsPutEvents PutEventsXAmzTargetEnum = "AWSEvents.PutEvents"
)

type PutEventsHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutEventsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutEventsRequest struct {
	Headers PutEventsHeaders
	Request shared.PutEventsRequest `request:"mediaType=application/json"`
}

type PutEventsResponse struct {
	ContentType       string
	InternalException *interface{}
	PutEventsResponse *shared.PutEventsResponse
	StatusCode        int64
}
