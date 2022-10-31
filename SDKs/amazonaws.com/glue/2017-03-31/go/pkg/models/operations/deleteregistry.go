package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRegistryXAmzTargetEnum string

const (
	DeleteRegistryXAmzTargetEnumAwsGlueDeleteRegistry DeleteRegistryXAmzTargetEnum = "AWSGlue.DeleteRegistry"
)

type DeleteRegistryHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRegistryXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
