package operations

import (
	"openapi/pkg/models/shared"
)

type PutPermissionXAmzTargetEnum string

const (
	PutPermissionXAmzTargetEnumAwsEventsPutPermission PutPermissionXAmzTargetEnum = "AWSEvents.PutPermission"
)

type PutPermissionHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        PutPermissionXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
