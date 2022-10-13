package operations

import (
	"openapi/pkg/models/shared"
)

type ListAPIDestinationsXAmzTargetEnum string

const (
	ListAPIDestinationsXAmzTargetEnumAwsEventsListAPIDestinations ListAPIDestinationsXAmzTargetEnum = "AWSEvents.ListApiDestinations"
)

type ListAPIDestinationsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListAPIDestinationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListAPIDestinationsRequest struct {
	Headers ListAPIDestinationsHeaders
	Request shared.ListAPIDestinationsRequest `request:"mediaType=application/json"`
}

type ListAPIDestinationsResponse struct {
	ContentType                 string
	InternalException           *interface{}
	ListAPIDestinationsResponse *shared.ListAPIDestinationsResponse
	StatusCode                  int64
}
