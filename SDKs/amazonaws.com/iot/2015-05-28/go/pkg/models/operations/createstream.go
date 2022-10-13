package operations

import (
	"openapi/pkg/models/shared"
)

type CreateStreamPathParams struct {
	StreamID string `pathParam:"style=simple,explode=false,name=streamId"`
}

type CreateStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateStreamRequestBody struct {
	Description *string             `json:"description"`
	Files       []shared.StreamFile `json:"files"`
	RoleArn     string              `json:"roleArn"`
	Tags        []shared.Tag        `json:"tags"`
}

type CreateStreamRequest struct {
	PathParams CreateStreamPathParams
	Headers    CreateStreamHeaders
	Request    CreateStreamRequestBody `request:"mediaType=application/json"`
}

type CreateStreamResponse struct {
	ContentType                    string
	CreateStreamResponse           *shared.CreateStreamResponse
	InternalFailureException       *interface{}
	InvalidRequestException        *interface{}
	LimitExceededException         *interface{}
	ResourceAlreadyExistsException *interface{}
	ResourceNotFoundException      *interface{}
	ServiceUnavailableException    *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	UnauthorizedException          *interface{}
}
