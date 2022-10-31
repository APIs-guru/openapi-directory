package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateArchiveXAmzTargetEnum string

const (
	UpdateArchiveXAmzTargetEnumAwsEventsUpdateArchive UpdateArchiveXAmzTargetEnum = "AWSEvents.UpdateArchive"
)

type UpdateArchiveHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateArchiveXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateArchiveRequest struct {
	Headers UpdateArchiveHeaders
	Request shared.UpdateArchiveRequest `request:"mediaType=application/json"`
}

type UpdateArchiveResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	InvalidEventPatternException    *interface{}
	LimitExceededException          *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	UpdateArchiveResponse           *shared.UpdateArchiveResponse
}
