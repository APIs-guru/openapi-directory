package operations

import (
	"openapi/pkg/models/shared"
)

type PutSchemaFromJSONHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type PutSchemaFromJSONRequestBody struct {
	Document string `json:"Document"`
}

type PutSchemaFromJSONRequest struct {
	Headers PutSchemaFromJSONHeaders
	Request PutSchemaFromJSONRequestBody `request:"mediaType=application/json"`
}

type PutSchemaFromJSONResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	InternalServiceException   *interface{}
	InvalidArnException        *interface{}
	InvalidRuleException       *interface{}
	InvalidSchemaDocException  *interface{}
	LimitExceededException     *interface{}
	PutSchemaFromJSONResponse  *shared.PutSchemaFromJSONResponse
	RetryableConflictException *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
