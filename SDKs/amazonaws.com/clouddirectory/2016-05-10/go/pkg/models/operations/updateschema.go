package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateSchemaHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type UpdateSchemaRequestBody struct {
	Name string `json:"Name"`
}

type UpdateSchemaRequest struct {
	Headers UpdateSchemaHeaders
	Request UpdateSchemaRequestBody `request:"mediaType=application/json"`
}

type UpdateSchemaResponse struct {
	AccessDeniedException      *shared.AccessDeniedException
	ContentType                string
	InternalServiceException   *shared.InternalServiceException
	InvalidArnException        *shared.InvalidArnException
	LimitExceededException     *shared.LimitExceededException
	ResourceNotFoundException  *shared.ResourceNotFoundException
	RetryableConflictException *shared.RetryableConflictException
	StatusCode                 int64
	UpdateSchemaResponse       *shared.UpdateSchemaResponse
	ValidationException        *shared.ValidationException
}
