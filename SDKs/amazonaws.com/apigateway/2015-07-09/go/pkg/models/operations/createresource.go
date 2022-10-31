package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourcePathParams struct {
	ParentID  string `pathParam:"style=simple,explode=false,name=parent_id"`
	RestapiID string `pathParam:"style=simple,explode=false,name=restapi_id"`
}

type CreateResourceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateResourceRequestBody struct {
	PathPart string `json:"pathPart"`
}

type CreateResourceRequest struct {
	PathParams CreateResourcePathParams
	Headers    CreateResourceHeaders
	Request    CreateResourceRequestBody `request:"mediaType=application/json"`
}

type CreateResourceResponse struct {
	BadRequestException      *interface{}
	ConflictException        *interface{}
	ContentType              string
	LimitExceededException   *interface{}
	NotFoundException        *interface{}
	Resource                 *shared.Resource
	StatusCode               int64
	TooManyRequestsException *interface{}
	UnauthorizedException    *interface{}
}
