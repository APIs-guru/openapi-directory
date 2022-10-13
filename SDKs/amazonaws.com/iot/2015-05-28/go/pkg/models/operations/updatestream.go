package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateStreamPathParams struct {
	StreamID string `pathParam:"style=simple,explode=false,name=streamId"`
}

type UpdateStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateStreamRequestBody struct {
	Description *string             `json:"description"`
	Files       []shared.StreamFile `json:"files"`
	RoleArn     *string             `json:"roleArn"`
}

type UpdateStreamRequest struct {
	PathParams UpdateStreamPathParams
	Headers    UpdateStreamHeaders
	Request    UpdateStreamRequestBody `request:"mediaType=application/json"`
}

type UpdateStreamResponse struct {
	ContentType                 string
	InternalFailureException    *interface{}
	InvalidRequestException     *interface{}
	ResourceNotFoundException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	ThrottlingException         *interface{}
	UnauthorizedException       *interface{}
	UpdateStreamResponse        *shared.UpdateStreamResponse
}
