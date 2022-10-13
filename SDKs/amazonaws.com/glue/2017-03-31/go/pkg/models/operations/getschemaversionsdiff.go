package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaVersionsDiffXAmzTargetEnum string

const (
	GetSchemaVersionsDiffXAmzTargetEnumAwsGlueGetSchemaVersionsDiff GetSchemaVersionsDiffXAmzTargetEnum = "AWSGlue.GetSchemaVersionsDiff"
)

type GetSchemaVersionsDiffHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSchemaVersionsDiffXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSchemaVersionsDiffRequest struct {
	Headers GetSchemaVersionsDiffHeaders
	Request shared.GetSchemaVersionsDiffInput `request:"mediaType=application/json"`
}

type GetSchemaVersionsDiffResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	EntityNotFoundException       *interface{}
	GetSchemaVersionsDiffResponse *shared.GetSchemaVersionsDiffResponse
	InternalServiceException      *interface{}
	InvalidInputException         *interface{}
	StatusCode                    int64
}
