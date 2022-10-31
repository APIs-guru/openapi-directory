package operations

import (
	"openapi/pkg/models/shared"
)

type GetAppliedSchemaVersionHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetAppliedSchemaVersionRequestBody struct {
	SchemaArn string `json:"SchemaArn"`
}

type GetAppliedSchemaVersionRequest struct {
	Headers GetAppliedSchemaVersionHeaders
	Request GetAppliedSchemaVersionRequestBody `request:"mediaType=application/json"`
}

type GetAppliedSchemaVersionResponse struct {
	AccessDeniedException           *shared.AccessDeniedException
	ContentType                     string
	GetAppliedSchemaVersionResponse *shared.GetAppliedSchemaVersionResponse
	InternalServiceException        *shared.InternalServiceException
	InvalidArnException             *shared.InvalidArnException
	LimitExceededException          *shared.LimitExceededException
	ResourceNotFoundException       *shared.ResourceNotFoundException
	RetryableConflictException      *shared.RetryableConflictException
	StatusCode                      int64
	ValidationException             *shared.ValidationException
}
