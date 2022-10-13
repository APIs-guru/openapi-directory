package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionXAmzTargetEnum string

const (
	PutPermissionXAmzTargetEnumAwsEventsPutPermission PutPermissionXAmzTargetEnum = "AWSEvents.PutPermission"
)

type PutPermissionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutPermissionRequest struct {
	Headers PutPermissionHeaders
	Request shared.PutPermissionRequest `request:"mediaType=application/json"`
}

type PutPermissionResponse struct {
	ConcurrentModificationException *interface{}
	ContentType                     string
	InternalException               *interface{}
	OperationDisabledException      *interface{}
	PolicyLengthExceededException   *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
}
