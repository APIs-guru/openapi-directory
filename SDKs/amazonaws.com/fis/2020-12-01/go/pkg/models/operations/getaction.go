package operations

import (
	"openapi/pkg/models/shared"
)

type GetActionPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetActionHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetActionRequest struct {
	PathParams GetActionPathParams
	Headers    GetActionHeaders
}

type GetActionResponse struct {
	ContentType               string
	GetActionResponse         *shared.GetActionResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
