package operations

import (
	"openapi/pkg/models/shared"
)

type GetSchemaAsJSONHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
	XAmzDataPartition string  `header:"name=x-amz-data-partition"`
}

type GetSchemaAsJSONRequest struct {
	Headers GetSchemaAsJSONHeaders
}

type GetSchemaAsJSONResponse struct {
	AccessDeniedException      *interface{}
	ContentType                string
	GetSchemaAsJSONResponse    *shared.GetSchemaAsJSONResponse
	InternalServiceException   *interface{}
	InvalidArnException        *interface{}
	LimitExceededException     *interface{}
	ResourceNotFoundException  *interface{}
	RetryableConflictException *interface{}
	StatusCode                 int64
	ValidationException        *interface{}
}
