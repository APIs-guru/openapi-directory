package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateConnectionXAmzTargetEnum string

const (
	UpdateConnectionXAmzTargetEnumAwsGlueUpdateConnection UpdateConnectionXAmzTargetEnum = "AWSGlue.UpdateConnection"
)

type UpdateConnectionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateConnectionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateConnectionRequest struct {
	Headers UpdateConnectionHeaders
	Request shared.UpdateConnectionRequest `request:"mediaType=application/json"`
}

type UpdateConnectionResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	GlueEncryptionException   *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
	UpdateConnectionResponse  map[string]interface{}
}
