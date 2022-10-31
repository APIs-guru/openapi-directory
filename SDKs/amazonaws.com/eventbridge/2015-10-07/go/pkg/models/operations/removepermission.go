package operations

import (
	"openapi/pkg/models/shared"
)

type RemovePermissionXAmzTargetEnum string

const (
	RemovePermissionXAmzTargetEnumAwsEventsRemovePermission RemovePermissionXAmzTargetEnum = "AWSEvents.RemovePermission"
)

type RemovePermissionHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RemovePermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RemovePermissionRequest struct {
	Headers RemovePermissionHeaders
	Request shared.RemovePermissionRequest `request:"mediaType=application/json"`
}

type RemovePermissionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	OperationDisabledException      *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
