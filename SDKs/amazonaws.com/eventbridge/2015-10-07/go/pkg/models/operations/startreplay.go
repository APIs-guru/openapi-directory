package operations

import (
	"openapi/pkg/models/shared"
)

type StartReplayXAmzTargetEnum string

const (
	StartReplayXAmzTargetEnumAwsEventsStartReplay StartReplayXAmzTargetEnum = "AWSEvents.StartReplay"
)

type StartReplayHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        StartReplayXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
