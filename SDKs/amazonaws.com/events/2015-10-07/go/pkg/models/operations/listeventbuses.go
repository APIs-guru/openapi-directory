package operations

import (
	"openapi/pkg/models/shared"
)

type ListEventBusesXAmzTargetEnum string

const (
	ListEventBusesXAmzTargetEnumAwsEventsListEventBuses ListEventBusesXAmzTargetEnum = "AWSEvents.ListEventBuses"
)

type ListEventBusesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListEventBusesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListEventBusesRequest struct {
	Headers ListEventBusesHeaders
	Request shared.ListEventBusesRequest `request:"mediaType=application/json"`
}

type ListEventBusesResponse struct {
	ContentType            string
	InternalException      *interface{}
	ListEventBusesResponse *shared.ListEventBusesResponse
	StatusCode             int64
}
