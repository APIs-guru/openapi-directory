package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteArchiveXAmzTargetEnum string

const (
	DeleteArchiveXAmzTargetEnumAwsEventsDeleteArchive DeleteArchiveXAmzTargetEnum = "AWSEvents.DeleteArchive"
)

type DeleteArchiveHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteArchiveXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteArchiveRequest struct {
	Headers DeleteArchiveHeaders
	Request shared.DeleteArchiveRequest `request:"mediaType=application/json"`
}

type DeleteArchiveResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteArchiveResponse           map[string]interface{}
	InternalException               *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
