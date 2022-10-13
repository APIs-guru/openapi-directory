package operations

import (
	"openapi/pkg/models/shared"
)

type DeletePermissionXAmzTargetEnum string

const (
	DeletePermissionXAmzTargetEnumAcmPrivateCaDeletePermission DeletePermissionXAmzTargetEnum = "ACMPrivateCA.DeletePermission"
)

type DeletePermissionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeletePermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeletePermissionRequest struct {
	Headers DeletePermissionHeaders
	Request shared.DeletePermissionRequest `request:"mediaType=application/json"`
}

type DeletePermissionResponse struct {
	ContentType               string
	InvalidArnException       *interface{}
	InvalidStateException     *interface{}
	RequestFailedException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
