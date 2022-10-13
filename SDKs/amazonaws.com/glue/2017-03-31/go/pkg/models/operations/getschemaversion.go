package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaVersionXAmzTargetEnum string

const (
	GetSchemaVersionXAmzTargetEnumAwsGlueGetSchemaVersion GetSchemaVersionXAmzTargetEnum = "AWSGlue.GetSchemaVersion"
)

type GetSchemaVersionHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSchemaVersionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSchemaVersionRequest struct {
	Headers GetSchemaVersionHeaders
	Request shared.GetSchemaVersionInput `request:"mediaType=application/json"`
}

type GetSchemaVersionResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	EntityNotFoundException  *interface{}
	GetSchemaVersionResponse *shared.GetSchemaVersionResponse
	InternalServiceException *interface{}
	InvalidInputException    *interface{}
	StatusCode               int64
}
