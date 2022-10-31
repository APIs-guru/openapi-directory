package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArchiveXAmzTargetEnum string

const (
	CreateArchiveXAmzTargetEnumAwsEventsCreateArchive CreateArchiveXAmzTargetEnum = "AWSEvents.CreateArchive"
)

type CreateArchiveHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateArchiveXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
