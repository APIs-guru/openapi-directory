package operations

import (
	"openapi/pkg/models/shared"
)

type CreatePermissionXAmzTargetEnum string

const (
	CreatePermissionXAmzTargetEnumAcmPrivateCaCreatePermission CreatePermissionXAmzTargetEnum = "ACMPrivateCA.CreatePermission"
)

type CreatePermissionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreatePermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreatePermissionRequest struct {
	Headers CreatePermissionHeaders
	Request shared.CreatePermissionRequest `request:"mediaType=application/json"`
}

type CreatePermissionResponse struct {
	ContentType                      string
	InvalidArnException              *interface{}
	InvalidStateException            *interface{}
	LimitExceededException           *interface{}
	PermissionAlreadyExistsException *interface{}
	RequestFailedException           *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
