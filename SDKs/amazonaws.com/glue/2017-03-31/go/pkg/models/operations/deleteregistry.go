package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRegistryXAmzTargetEnum string

const (
	DeleteRegistryXAmzTargetEnumAwsGlueDeleteRegistry DeleteRegistryXAmzTargetEnum = "AWSGlue.DeleteRegistry"
)

type DeleteRegistryHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRegistryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRegistryRequest struct {
	Headers DeleteRegistryHeaders
	Request shared.DeleteRegistryInput `request:"mediaType=application/json"`
}

type DeleteRegistryResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	DeleteRegistryResponse          *shared.DeleteRegistryResponse
	EntityNotFoundException         *interface{}
	InvalidInputException           *interface{}
	StatusCode                      int64
}
