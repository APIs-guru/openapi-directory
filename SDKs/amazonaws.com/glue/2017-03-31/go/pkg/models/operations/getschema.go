package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaXAmzTargetEnum string

const (
	GetSchemaXAmzTargetEnumAwsGlueGetSchema GetSchemaXAmzTargetEnum = "AWSGlue.GetSchema"
)

type GetSchemaHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSchemaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSchemaRequest struct {
	Headers GetSchemaHeaders
	Request shared.GetSchemaInput `request:"mediaType=application/json"`
}

type GetSchemaResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	EntityNotFoundException  *interface{}
	GetSchemaResponse        *shared.GetSchemaResponse
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	StatusCode               int64
}
