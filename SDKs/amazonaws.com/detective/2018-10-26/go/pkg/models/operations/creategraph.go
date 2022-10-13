package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGraphHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateGraphRequestBody struct {
	Tags map[string]string `json:"Tags"`
}

type CreateGraphRequest struct {
	Headers CreateGraphHeaders
	Request CreateGraphRequestBody `request:"mediaType=application/json"`
}

type CreateGraphResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	CreateGraphResponse           *shared.CreateGraphResponse
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StatusCode                    int64
}
