package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateSchemaRequestBody struct {
	Name string `json:"Name"`
}

type CreateSchemaRequest struct {
	Headers CreateSchemaHeaders
	Request CreateSchemaRequestBody `request:"mediaType=application/json"`
}

type CreateSchemaResponse struct {
	AccessDeniedException        *shared.AccessDeniedException
	ContentType                  string
	CreateSchemaResponse         *shared.CreateSchemaResponse
	InternalServiceException     *shared.InternalServiceException
	InvalidArnException          *shared.InvalidArnException
	LimitExceededException       *shared.LimitExceededException
	RetryableConflictException   *shared.RetryableConflictException
	SchemaAlreadyExistsException *shared.SchemaAlreadyExistsException
	StatusCode                   int64
	ValidationException          *shared.ValidationException
}
