package operations

import (
	"openapi/pkg/models/shared"
)

type ListReplaysXAmzTargetEnum string

const (
	ListReplaysXAmzTargetEnumAwsEventsListReplays ListReplaysXAmzTargetEnum = "AWSEvents.ListReplays"
)

type ListReplaysHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListReplaysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListReplaysRequest struct {
	Headers ListReplaysHeaders
	Request shared.ListReplaysRequest `request:"mediaType=application/json"`
}

type ListReplaysResponse struct {
	ContentType         string
	InternalException   *interface{}
	ListReplaysResponse *shared.ListReplaysResponse
	StatusCode          int64
}
