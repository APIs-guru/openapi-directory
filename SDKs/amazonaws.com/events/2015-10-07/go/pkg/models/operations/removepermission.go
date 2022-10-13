package operations

import (
	"openapi/pkg/models/shared"
)

type RemovePermissionXAmzTargetEnum string

const (
	RemovePermissionXAmzTargetEnumAwsEventsRemovePermission RemovePermissionXAmzTargetEnum = "AWSEvents.RemovePermission"
)

type RemovePermissionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemovePermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
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
