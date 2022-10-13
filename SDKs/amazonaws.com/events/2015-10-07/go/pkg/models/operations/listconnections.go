package operations

import (
	"openapi/pkg/models/shared"
)

type ListConnectionsXAmzTargetEnum string

const (
	ListConnectionsXAmzTargetEnumAwsEventsListConnections ListConnectionsXAmzTargetEnum = "AWSEvents.ListConnections"
)

type ListConnectionsHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListConnectionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListConnectionsRequest struct {
	Headers ListConnectionsHeaders
	Request shared.ListConnectionsRequest `request:"mediaType=application/json"`
}

type ListConnectionsResponse struct {
	ContentType             string
	InternalException       *interface{}
	ListConnectionsResponse *shared.ListConnectionsResponse
	StatusCode              int64
}
