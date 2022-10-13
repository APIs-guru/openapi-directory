package operations

import (
	"openapi/pkg/models/shared"
)

type StartReplayXAmzTargetEnum string

const (
	StartReplayXAmzTargetEnumAwsEventsStartReplay StartReplayXAmzTargetEnum = "AWSEvents.StartReplay"
)

type StartReplayHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReplayXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartReplayRequest struct {
	Headers StartReplayHeaders
	Request shared.StartReplayRequest `request:"mediaType=application/json"`
}

type StartReplayResponse struct {
	ContentType                    string
	InternalException              *interface{}
	InvalidEventPatternException   *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	StartReplayResponse            *shared.StartReplayResponse
	StatusCode                     int64
}
