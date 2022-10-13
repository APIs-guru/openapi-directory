package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArchiveXAmzTargetEnum string

const (
	CreateArchiveXAmzTargetEnumAwsEventsCreateArchive CreateArchiveXAmzTargetEnum = "AWSEvents.CreateArchive"
)

type CreateArchiveHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateArchiveXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateArchiveRequest struct {
	Headers CreateArchiveHeaders
	Request shared.CreateArchiveRequest `request:"mediaType=application/json"`
}

type CreateArchiveResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	CreateArchiveResponse           *shared.CreateArchiveResponse
	InternalException               *interface{}
	InvalidEventPatternException    *interface{}
	LimitExceededException          *interface{}
	ResourceAlreadyExistsException  *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
