package operations

import (
	"openapi/pkg/models/shared"
)

type CreateSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateSchemaRequestBody struct {
	Name string `json:"Name"`
}

type CreateSchemaRequest struct {
	Headers CreateSchemaHeaders
	Request CreateSchemaRequestBody `request:"mediaType=application/json"`
}

type CreateSchemaResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreateSchemaResponse         *shared.CreateSchemaResponse
	InternalServiceException     *interface{}
	InvalidArnException          *interface{}
	LimitExceededException       *interface{}
	RetryableConflictException   *interface{}
	SchemaAlreadyExistsException *interface{}
	StatusCode                   int64
	ValidationException          *interface{}
}
