package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSchemaXAmzTargetEnum string

const (
	CreateSchemaXAmzTargetEnumAwsGlueCreateSchema CreateSchemaXAmzTargetEnum = "AWSGlue.CreateSchema"
)

type CreateSchemaHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSchemaXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateSchemaRequest struct {
	Headers CreateSchemaHeaders
	Request shared.CreateSchemaInput `request:"mediaType=application/json"`
}

type CreateSchemaResponse struct {
	AccessDeniedException                *interface{}
	AlreadyExistsException               *interface{}
	ContentType                          string
	CreateSchemaResponse                 *shared.CreateSchemaResponse
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
