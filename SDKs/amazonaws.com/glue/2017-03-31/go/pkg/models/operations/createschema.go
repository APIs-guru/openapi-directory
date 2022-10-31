package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSchemaXAmzTargetEnum string

const (
	CreateSchemaXAmzTargetEnumAwsGlueCreateSchema CreateSchemaXAmzTargetEnum = "AWSGlue.CreateSchema"
)

type CreateSchemaHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateSchemaXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
